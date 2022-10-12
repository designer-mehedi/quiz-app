import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizdata = useLoaderData();
    const data = quizdata.data; 
    console.log(data); 
    return (
        <div className='grid h-[600px] items-center justify-center'>
                <LineChart className='' data={data} width={300} height={400}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="total" />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="2 2" />
                </LineChart>
            </div>
            
    );
};

export default Statistics;