import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
import './Home.css';

const Home = () => {
    const quizTopics = useLoaderData();
    const topics = quizTopics.data; 
    // console.log(topics);
    return (
        <div>
            <div className="banner px-4 lg:px-32 sm:px-4 py-10 text-white">
                <h2 className='font-bold text-5xl mb-3'>Welcome to Quizz World</h2>
                <p className='text-xl font-medium'>Play quiz today and increase your knowledge</p>
            </div>
            <section className='px-4 lg:px-32 sm:px-4 py-10'>
                <h2 className='text-3xl mb-12 font-bold'>Quiz Topics</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-10'>
                    {
                        topics.map(topic => <QuizTopic key={topic.id} topic={topic}></QuizTopic>)
                    }
                </div>
            </section>
        </div>
        
    );
};

export default Home;