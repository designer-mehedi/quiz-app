import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const loadQuizData = useLoaderData(); 
    const quizData = loadQuizData.data.questions; 
    // console.log(quizData); 
    return (
        <div className='px-4 lg:px-32 sm:px-4 py-10'>
            {
                quizData.map(quiz => <QuizDetails quiz={quiz} key={quiz.id}></QuizDetails>)
            }
        </div>
    );
};

export default Quiz;