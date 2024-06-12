import axios from 'axios';

const API_URL = 'http://localhost:5000/api/feedback';

export const getFeedback = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const submitFeedback = async (name: string, feedback: string) => {
    const response = await axios.post(API_URL, { name, feedback });
    return response.data;
};
