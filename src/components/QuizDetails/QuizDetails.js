import React from 'react';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './QuizDetails.css'; 

const QuizDetails = ({ quiz }) => {
    // console.log(quiz)
    const { question, options, correctAnswer } = quiz;

    const handleAnswer = (answer) => {
        if (answer === correctAnswer) {
            // console.log('This is correct')
            toast.success('Correct Answer', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: true,
                theme: "dark"
            })
        } else {
            // console.log('This is incorrect')
            toast.error('Wrong Answer', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: true,
                theme: "dark"
            })
        }
    }

    const displayHint = () => {
        toast.info(correctAnswer, {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            theme: "dark"
        })
    }

    return (
        <div className='w-full xl:w-[850px] sm:w-full m-auto border border-gray-300 mb-3 p-4 rounded-lg'>
            <div className="flex justify-end pb-2">
                <button className="" onClick={displayHint}>hint <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                </button>
                <ToastContainer />
            </div>
            <h2 className='bg-neutral-200 py-5'>{question.slice(3, -4)}</h2>
            <div className='sm:grid-cols-1 grid lg:grid-cols-2 grid-cols-1 gap-4 pb-16 pt-4 text-white'>
                <button onClick={() => handleAnswer(options[0])} className='bg-indigo-500 px-4 py-3 w-full btn'>{options[0]}</button>
                <button onClick={() => handleAnswer(options[1])} className='bg-indigo-500 px-4 py-3 w-full btn'>{options[1]}</button>
                <button onClick={() => handleAnswer(options[2])} className='bg-indigo-500 px-4 py-3 w-full btn'>{options[2]}</button>
                <button onClick={() => handleAnswer(options[3])} className='bg-indigo-500 px-4 py-3 w-full btn'>{options[3]}</button>
            </div>
        </div>
    );
};

export default QuizDetails;