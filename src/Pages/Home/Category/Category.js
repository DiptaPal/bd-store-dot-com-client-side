import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'

const Category = ({ category }) => {
    const {_id, categoryImage} = category
    return (
        <Link to={`/categoryProducts/${_id}`} className="cd w-full h-64 relative overflow-hidden cursor-pointer  shadow-lg border-2" data-aos="fade-up">
            <div className='flex justify-center items-center'>
                <img src={categoryImage} className='w-64 h-64 object-cover p-3 rounded-full object-center' alt="Shoes" />
            </div>
            <div className={`cd-body w-full h-full absolute top-0 bg-[#04050538] backdrop-blur-[5px]`}>
                <div className='flex justify-center items-center mt-24'>
                    <button className='btn bg-primary hover:bg-primary border-none text-2xl'>Go Now</button>
                </div>
            </div>
        </Link>
    );
};

export default Category;