import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';

const Home = () => {
    const quizTopics = useLoaderData();
    const topics = quizTopics.data; 
    // console.log(topics);
    return (
        <div className='container px-32'>
            <h2 className='text-3xl mt-5 mb-12 font-bold'>Quiz Topics</h2>
            <div className='grid grid-cols-2 gap-10'>
                {
                    topics.map(topic => <QuizTopic key={topic.id} topic={topic}></QuizTopic>)
                }
            </div>
        </div>
    );
};

export default Home;