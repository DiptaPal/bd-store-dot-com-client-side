import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import useToken from '../../Hooks/useToken';

const Login = () => {
    useTitle('Login');
    const [error, setError] = useState('')
    const [userEmail, setUserEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail);

    const from = location.state?.from?.pathname || "/";

    if(token){
        navigate(from, { replace: true });
    }

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, singInWithGoogle, passwordReset } = useContext(AuthContext);

    const handleLogin = data => {
        setError('')
        signIn(data.email, data.password)
            .then(result => {
                // const user = result.user;
                toast.success("Login Successful")
                setLoginUserEmail(data.email)
                // navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
                toast.error(error.message)
            })
    }

    const handleGoogleSingUp = () => {
        singInWithGoogle()
            .then(result => {
                const user = result.user;
                toast.success('Login Successful')
                saveUser(user.displayName, user.email, 'buyer', user.photoURL);
                setLoginUserEmail(user.email)
                // navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message)
                toast.error(error.message)
            })
    }

    const saveUser = (name, email, role, img) => {
        const user = {
            name,
            email,
            role,
            img
        }
        fetch('https://bd-store-dot-com-server-side.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                
            })

    }

    const handlePasswordError = event => {
        const email = event.target.value
        setUserEmail(email);
    }
    const handlePasswordReset = () => {
        passwordReset(userEmail)
            .then(() => {
                setError('')
                toast.success('Password Reset Successful', { autoClose: 1000 })
            })
            .catch(error => {
                setError(error.message)
                toast.error(error.message, { autoClose: 1000 })
            })
    }

    return (
        <div className='flex justify-center items-center my-24 px-4 lg:px-0'>
            <div className='flex flex-col w-full max-w-xl p-12 space-y-4 text-center shadow-md rounded-md bg-base-200 text-gray-800'>
                <h1 className="my-3 text-4xl font-semibold text-center mb-8 text-secondary">Login</h1>
                <form onSubmit={handleSubmit(handleLogin)} className='space-y-6'>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor="email" className="text-base font-medium block text-left">Email</label>
                        <input
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            type='email' placeholder='example@gmail.com' id='email' className='text-xl w-full border px-4 py-4 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-secondary' name='email'
                            onBlur={handlePasswordError}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor="password" className="text-base font-medium block text-left">Password</label>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            type='password' placeholder='Password' id='password' className='text-xl w-full border px-4 py-4 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-secondary' name='password'
                            aria-invalid={errors.password ? "true" : "false"}
                        />

                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

                        <div className="flex justify-start text-xs text-gray-600 mt-0 cursor-pointer">
                            <button type='button' onClick={handlePasswordReset} className='text-base'>Forgot Password?</button>
                        </div>
                    </div>
                    <div className='space-y-1 text-sm'>
                        <p className='text-red-600'>{error}</p>
                    </div>
                    <input type="submit" value='Login' className='text-xl w-full border px-4 py-4 rounded-md border-gray-300 bg-primary text-white cursor-pointer' />
                </form>
                <p className="text-sm text-center text-gray-600">New to Doctors Portal?
                    <Link to="/registration" className="text-secondary"> Create new account</Link>
                </p>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full text-gray-600" />
                    <p className="px-3 text-gray-600">OR</p>
                    <hr className="w-full text-gray-600" />
                </div>
                <button onClick={handleGoogleSingUp} className='text-xl w-full border px-4 py-4 rounded-md border-primary text-black cursor-pointer'>CONTINUE WITH GOOGLE </button>
            </div>
        </div>
    );
};

export default Login;