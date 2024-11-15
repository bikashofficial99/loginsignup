
import * as React from 'react';

export default function Form(){
    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 broder-gray-200'>
            <h1 className='text-5xl font-semibold'>Welcome Back</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
            <div className='mt-8 '>
                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input className='w-full border-2 border-gray-100 roundex-xl p-4 mt-4 bg-transparent'
                    placeholder='Enter Your email'
                     />
                </div>
                <div>
                    <label className='text-lg font-medium'>Password</label>
                    <input className='w-full border-2 border-gray-100 roundex-xl p-4 mt-4 bg-transparent'
                    placeholder='Enter Your password'
                     />
                </div>
               
                <div>
                    <div>
                    <input type="checkbox" />
                    <label className='ml-2 font-medium text-base'>Remember for 30 days</label>
                </div>
                <button className='font-medium text-base text-violet-500'>Forget Password</button>
            </div>
            </div>
            </div>
    )
}