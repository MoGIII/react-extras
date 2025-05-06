import React, { useState } from 'react';
import './Home.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { signupSchema } from './signup.schema';

function Home () {

        return (
            <Formik 
            initialValues={{username: ''}}
            validationSchema={signupSchema}
            >
                <Form>
                <h1>Sign up</h1>
                <div className='form-group'>
                    <Field name="username" type='text' placeholder='User name'/>
                    <ErrorMessage name="username" component="div" className='error'/>
                </div>
                <div className='form-group'>
                    <input type='email' placeholder='Email'/>
                    <span className='error'>username must be 3-16 charecters long!</span>
                </div>
                <div className='form-group'>
                    <input type='password' placeholder='Password'/>
                    <span className='error'>username must be 3-16 charecters long!</span>
                </div>
                <div className='form-group'>
                <input type="checkbox" name="terms" value="false"/>
                <label htmlFor='terms'>Agree to terms</label>
                <span className='error'>agree to terms must be selected!</span>
                </div>
                <div className='form-group'>
                    <button type="submit">Submit</button>
                </div>
                </Form>
            </Formik>
        );
}


export default Home;
