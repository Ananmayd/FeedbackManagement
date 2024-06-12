type Feedback = {
    name: string;
    feedback: string;
    timestamp: number;
};

const feedbackList: Feedback[] = [];

export const getFeedback = () => {
    return feedbackList;
};

export const addFeedback = (name: string, feedback: string) => {
    feedbackList.push({ name, feedback, timestamp: Date.now() });
};
