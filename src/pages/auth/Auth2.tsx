import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from './auth.module.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import "./Auth.css"
import {useFormik} from "formik";
import {loginAsync, registrationAsync} from "../../features/auth/authSlice";
import {useNavigate} from "react-router";

export function Auth2() {
    // const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    const [reged, setReged] = useState(true);
    const notReged = () => setReged(false)
    const isReged = () => setReged(true)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            role: "user",
        },
        onSubmit: (data) => {
            if(reged){
                console.log(data)
                const data_obj = {data, navigate}
                dispatch(loginAsync(data_obj))
            }else{
                console.log(data)
                const data_obj = {data, navigate}
                dispatch(registrationAsync(data_obj))
            }
        }
    })

    return (
        <div className='auth container'>
            <form onSubmit={formik.handleSubmit} className='auth_block'>
                <span className='auth_label'>E-mail*</span>
                <InputGroup>
                    <FormControl
                        // value={values.email}
                        onChange={formik.handleChange}
                        // onBlur={handleBlur}
                        name='email'
                        // type='email'
                        className='auth_input'
                        // // isInvalid={touched.email && errors.email}
                        placeholder='Введите email'
                    />
                </InputGroup>
                {/*{touched.email && errors.email && (*/}
                {/*    <div className='input_error'>{errors.email}</div>*/}
                {/*)}*/}
                <span className='auth_label'>Пароль*</span>
                <InputGroup>
                    <FormControl
                        // value={values.password}
                        onChange={formik.handleChange}
                        // onBlur={handleBlur}
                        // isInvalid={touched.password && errors.password}
                        name='password'
                        // autoComplete='off'
                        className='auth_input'
                        placeholder='Введите пароль'
                        // type='password'
                    />
                </InputGroup>
                {/*{touched.password && errors.password && (*/}
                {/*    <div className='input_error'>{errors.password}</div>*/}
                {/*)}*/}
                <Button
                    type='submit'
                    className='auth_btn'
                    variant='primary'
                    onClick={isReged}
                >
                    Войти
                </Button>

                <Button
                    type='submit'
                    className='auth_btn'
                    variant='primary'
                    onClick={notReged}
                >
                    Зарегистрироваться
                </Button>
            </form>
        </div>
    );
}
