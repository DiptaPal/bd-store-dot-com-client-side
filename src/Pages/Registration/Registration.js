import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { useForm } from "react-hook-form";
import useTitle from '../../Hooks/useTitle';

const Registration = () => {
    useTitle('Register')
    const [error, setError] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, userProfileUpdate, singInWithGoogle } = useContext(AuthContext);
    const [createdUserEmail, setCreateUserEmail] = useState('');
    // const [token] = useToken(createdUserEmail);

    const navigate = useNavigate();
    // if(token){
    //     navigate('/')
    // }
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleRegister = data => {
        setError('');

        //host image in imgBB
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    //user registration
                    createUser(data.email, data.password)
                        .then(result => {
                            const user = result.user;
                            handleUpdateProfile(data.username, imageData.data.url);
                            toast.success('User Create Successful');
                            saveUser(data.username, data.email, data.role, imageData.data.url);
                        })
                        .catch(error => {
                            setError(error.message)
                            toast.error(error.message)
                        })
                }
            })


    }


    const handleGoogleSingUp = () => {
        setError('');
        singInWithGoogle()
            .then(result => {
                const user = result.user;
                toast.success('User Create Successful')
                saveUser(user.displayName, user.email, 'buyer', user.photoURL);
            })
            .catch(error => {
                setError(error.message)
                toast.error(error.message)
            })
    }

    const handleUpdateProfile = (name, image) => {
        userProfileUpdate({ displayName: name, photoURL:image })
            .then(() => {

            })
            .catch(error => {
                setError(error.message)
                toast.error(error.message)
            })
    }

    const saveUser = (name, email, role, img) => {
        console.log(name, email, role, img);
        //     const user = {
        //         name,
        //         email,
        //         role,
        //     }
        //     fetch('https://doctors-portal-server-rosy.vercel.app/users', {
        //         method: 'POST',
        //         headers: {
        //             'content-type' : 'application/json', 
        //         },
        //         body: JSON.stringify(user)
        //     })
        //     .then(res => res.json())
        //     .then(data =>{
        //         setCreateUserEmail(email)
        //     })

    }



    return (
        <div className='flex justify-center items-center my-24 px-4'>
            <div className='flex flex-col w-full max-w-xl p-6 space-y-4 text-center shadow-md rounded-md bg-base-200 text-gray-800'>
                <h1 className="my-3 text-4xl font-semibold text-center mb-8 text-secondary">Registration</h1>
                <form onSubmit={handleSubmit(handleRegister)} className='space-y-6'>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor="username" className="text-base font-medium block text-left">Name</label>
                        <input
                            {...register("username", {
                                required: "Name is required"
                            })}
                            type='text' placeholder='User Name' className='text-xl w-full border px-4 py-4 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-secondary' name='username'
                            aria-invalid={errors.username ? "true" : "false"}
                        />
                        {errors.username && <p className='text-red-600' role="alert">{errors.username?.message}</p>}
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor="email" className="text-base font-medium block text-left">Email</label>
                        <input {...register("email", {
                            required: "Email is required"
                        })}
                            type='text' placeholder='example@gmail.com' className='text-xl w-full border px-4 py-4 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-secondary' name='email'
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>

                    <div className='space-y-1 text-sm'>
                        <label htmlFor="label" className="text-base font-medium block text-left mb-1 outline-secondary">Role</label>
                        <select
                            {...register("role")}
                            className="select select-bordered text-xl w-full px-4">
                            <option value='buyer'>Buyer</option>
                            <option value='seller'>Seller</option>
                        </select>
                    </div>

                    <div className='space-y-1 text-sm'>
                        <label htmlFor="username" className="text-base font-medium block text-left">Photo</label>
                        <input
                            {...register("photo", {
                                required: "Photo is required"
                            })}
                            type='file' className='text-xl w-full border px-4 py-4 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-secondary' name='photo'
                            aria-invalid={errors.photo ? "true" : "false"}
                        />
                        {errors.photo && <p className='text-red-600' role="alert">{errors.photo?.message}</p>}
                    </div>

                    <div className='space-y-1 text-sm'>
                        <label htmlFor="password" className="text-base font-medium block text-left">Password</label>
                        <input {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                            pattern: {
                                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                message: 'Password must be have an uppercase, special character and a number',
                            }
                        })}
                            type='password' placeholder='Password' className='text-xl w-full border px-4 py-4 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-secondary' name='password'
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>
                    <div className='space-y-1 text-sm'>
                        <p className='text-red-600'>{error}</p>
                    </div>
                    <input type="submit" value='Register' className='text-xl w-full border px-4 py-4 rounded-md border-gray-300 bg-primary text-white cursor-pointer' />
                </form>
                <p className="text-sm text-center text-gray-600">Already have an account?
                    <Link to="/login" className="text-secondary"> Please Login</Link>
                </p>
                <div className="flex flex-col w-full border-opacity-50 my-4">
                    <div className="divider">OR</div>
                </div>
                <button onClick={handleGoogleSingUp} className='text-xl w-full border px-4 py-4 rounded-md border-primary text-black cursor-pointer'>CONTINUE WITH GOOGLE </button>
            </div>
        </div>
    );
};

export default Registration;