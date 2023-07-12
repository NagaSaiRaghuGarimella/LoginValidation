import React, { useState } from 'react'
import {Formik,Form,ErrorMessage,Field} from 'formik';
import * as yup from 'yup';
import { FaRegUser } from "react-icons/fa";
import '../Styles/login.css'

const Login = () => {

    const[login,setLogin]=useState({
        username:'',
        password:''
    })

    const handleEventChange=(e)=>{
       setLogin(
        (prev) => ({ ...prev, [e.target.name]: e.target.value })
        )
    }
    const schema=yup.object({
        username:yup.string().matches(/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/,"mail id should be correct ").required("username should not be empty"),
        password:yup.string().matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters").required("password should not be empty")
    })

  return (
    <div>
        <Formik initialValues={{username:'',
                             password:''}}
                             validationSchema={schema}
        onSubmit={(values)=>{console.log(values)}}
        >
            <Form>
             <div className='user'>  
            <Field type="text" className="field" name="username" placeholder='Username' onKeyUp={handleEventChange}/>
            <FaRegUser className='icon'/>
            </div> 
            <ErrorMessage name="username"></ErrorMessage>
            <Field type="password" name="password" placeholder='Password' onKeyUp={handleEventChange}/>
            <ErrorMessage name="password"></ErrorMessage>
            <button type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
  )
}

export default Login