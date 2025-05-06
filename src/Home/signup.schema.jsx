import * as yup from 'yup';

export const signupSchema = yup.object().shape({
    username: yup.string().required().max(16).min(3)
    // email: yup.email().string()
    });