import React, { useState, useEffect } from 'react';
import './App.css';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import { getFeedback, submitFeedback as submitFeedbackService } from './services/feedbackservice';

type Feedback = {
    name: string;
    feedback: string;
    timestamp: number;
};

const App: React.FC = () => {
    const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            const data = await getFeedback();
            setFeedbackList(data);
        };

        fetchFeedback();
    }, []);

    const submitFeedback = async (name: string, feedback: string) => {
        await submitFeedbackService(name, feedback);
        const updatedFeedbackList = await getFeedback();
        setFeedbackList(updatedFeedbackList);
    };

    return (
        <div className="App">
            <h1>Feedback Management System</h1>
            <FeedbackForm onSubmit={submitFeedback} />
            <FeedbackList feedbackList={feedbackList} />
        </div>
    );
};

export default App;
