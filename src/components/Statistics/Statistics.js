import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizdata = useLoaderData();
    const data = quizdata.data; 
    console.log(data); 
    return (
        <div className='grid h-[600px] items-center justify-center w-56 mx-12 px-12 md:m-auto lg:m-auto sm:m-auto m-auto'>
                <ResponsiveContainer width={400} height={400}>
                <LineChart className='' data={data}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="total" />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="2 2" />
                </LineChart>
                </ResponsiveContainer>
            </div>
            
    );
};

export default Statistics;