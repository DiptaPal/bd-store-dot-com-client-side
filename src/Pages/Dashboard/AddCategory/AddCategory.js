import React from 'react';
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";


const AddCategory = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleCategory = data => {
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
                    const category = {
                       categoryName: data.category,
                       categoryImage: imageData.data.url  
                    }
                    console.log(category);

                    fetch('http://localhost:5000/categories', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(category)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Category add Successful')
                                reset();
                            }
                        })
                }
            })
    }
    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='text-2xl uppercase font-semibold'>Add Category</h1>
                <hr className='w-44 bg-secondary pt-1 mx-auto' />
            </div>
            <div className='flex justify-center items-center my-16 px-4 lg:px-0'>
                <div className='flex flex-col w-full max-w-4xl p-6 space-y-4 text-center shadow-md rounded-md bg-base-200 text-gray-800 mx-2 sm:mx-5'>
                    <form onSubmit={handleSubmit(handleCategory)} className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <div className='w-full'>
                                <label htmlFor="category" className="text-base font-medium block text-left">Product Category </label>
                                <input
                                    {...register("category", {
                                        required: "Product category is required"
                                    })}
                                    type='text' placeholder='Product Category' className='text-xl w-full border px-4 py-4 rounded-md border-gray-300 bg-gray-50 text-gray-800 outline-secondary' name='category'
                                    aria-invalid={errors.category ? "true" : "false"}
                                />
                                {errors.category && <p className='text-red-600' role="alert">{errors.category?.message}</p>}
                            </div>
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor="photo" className="text-base font-medium block text-left">Category Image</label>
                            <input
                                {...register("photo", {
                                    required: "Photo is required"
                                })}
                                type='file' className='file-input file-input-primary w-full' name='photo'
                                aria-invalid={errors.photo ? "true" : "false"}
                            />
                            {errors.photo && <p className='text-red-600' role="alert">{errors.photo?.message}</p>}
                        </div>

                        <input type="submit" value='Add Category' className='text-xl w-full border px-4 py-4 rounded-md border-gray-300 bg-primary text-white cursor-pointer' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCategory;