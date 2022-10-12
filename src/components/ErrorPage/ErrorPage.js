import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex justify-center flex-col items-center h-[600px]'>
            <h2 className='text-4xl font-bold mb-5'>Oops!!!</h2>
            <p className='text-red-600 font-medium text-lg'>Unexpected Error Occured: 404</p>
        </div>
    );
};

export default ErrorPage;