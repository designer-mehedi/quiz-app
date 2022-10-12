import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizTopic = ({topic}) => {
    // console.log(topic); 
    const { logo, name, total, id } = topic; 
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/quiz/${id}`)
    }
    return (
        <div className='border border-gray-400 p-10 rounded-xl'>
            <img className='m-auto w-full rounded-xl bg-slate-700 mb-4' src={logo} alt=""/>
            <h2>Topic: {name}</h2>
            <p>Total Quiz: {total}</p>
            <button onClick={handleNavigate} className='bg-indigo-600 text-white px-5 py-2 rounded-full mt-4 font-semibold'>Take Quiz</button>
        </div>
    );
};

export default QuizTopic;