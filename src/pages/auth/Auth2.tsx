import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import "./Auth.css"
import {useFormik} from "formik";
import {loginAsync, registrationAsync} from "../../features/auth/authSlice";
import {useNavigate} from "react-router";

export function Auth2() {
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
                        onChange={formik.handleChange}
                        name='email'
                        className='auth_input'
                        placeholder='Введите email'
                    />
                </InputGroup>
                <span className='auth_label'>Пароль*</span>
                <InputGroup>
                    <FormControl
                        onChange={formik.handleChange}
                        name='password'
                        className='auth_input'
                        placeholder='Введите пароль'
                    />
                </InputGroup>
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
