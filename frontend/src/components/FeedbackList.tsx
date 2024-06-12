import React from 'react';

type Feedback = {
    name: string;
    feedback: string;
    timestamp: number;
};

interface FeedbackListProps {
    feedbackList: Feedback[];
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbackList }) => {
    return (
        <div>
            <h2>Feedback List</h2>
            <ul>
                {feedbackList.map((item, index) => (
                    <li key={index}>
                        <strong>{item.name}:</strong> {item.feedback} <em>({new Date(item.timestamp).toLocaleString()})</em>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeedbackList;
