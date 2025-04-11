import classNames from 'classnames/bind';
import { useState, useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as httpRequest from '~/services/authService';
import style from './Auth.module.scss';
import { LockIcon, UserIcon } from '~/Components/Icons';
import Button from '~/Components/Button';
import { ToastContext } from '~/constants';

const cx = classNames.bind(style);

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const emailInput = useRef();
    const passwordInput = useRef();
    const confirmPasswordInput = useRef();
    const emailMessage = useRef();
    const passwordMessage = useRef();
    const confirmPasswordMessage = useRef();
    const validateMessage = useRef();

    const navigate = useNavigate();
    const showToastMessage = useContext(ToastContext);

    const handleSubmitForm = e => {
        e.preventDefault();
        handleValidateEmail();
        handleValidatePassword();
        handleConfirmPassword();

        const emailMessageValue = emailMessage.current.innerText;
        const passwordMessageValue = passwordMessage.current.innerText;
        const confirmPasswordMessageValue =
            confirmPasswordMessage.current.innerText;

        const fetchApi = async () => {
            const response = await httpRequest.postRegister({
                type: 'email',
                email: email,
                password: password,
            });
            if (response) {
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                showToastMessage('success', 'Tạo tài khoản thành công!');
                navigate('/login');
            } else {
                validateMessage.current.style.display = 'block';
            }
        };

        if (
            !emailMessageValue &&
            !passwordMessageValue &&
            !confirmPasswordMessageValue
        ) {
            fetchApi();
        } else {
            console.log(
                emailMessageValue,
                passwordMessageValue,
                confirmPasswordMessageValue
            );

            console.log('chua nhap du lieu');
        }
    };

    const handleValidateEmail = () => {
        const emailValue = emailInput.current.value;
        if (!emailValue) {
            emailMessage.current.innerText = 'Vui lòng nhập email';
            emailMessage.current.style.display = 'block';
        } else {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(emailValue)) {
                emailMessage.current.innerText = 'Trường này phải là email';
                emailMessage.current.style.display = 'block';
            } else {
                emailMessage.current.innerText = '';
                emailMessage.current.style.display = 'none';
            }
        }
    };

    const handleTypeEmail = () => {
        emailMessage.current.style.display = 'none';
    };

    const handleValidatePassword = () => {
        const passwordValue = passwordInput.current.value;
        if (!passwordValue) {
            passwordMessage.current.innerText = 'Vui lòng nhập mật khẩu';
            passwordMessage.current.style.display = 'block';
        } else {
            const regex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
            if (!regex.test(passwordValue)) {
                passwordMessage.current.innerText =
                    'Vui lòng nhập tối thiểu 6 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.';
                passwordMessage.current.style.display = 'block';
            } else {
                passwordMessage.current.innerText = '';
                passwordMessage.current.style.display = 'none';
            }
        }
    };

    const handleTypePassword = () => {
        passwordMessage.current.style.display = 'none';
    };

    const handleTypeConfirmPassword = () => {
        const passwordValue = passwordInput.current.value;
        const confirmPasswordValue = confirmPasswordInput.current.value;

        if (passwordValue !== confirmPasswordValue) {
            confirmPasswordMessage.current.innerText =
                'Mật khẩu nhập lại không chính xác';
            confirmPasswordMessage.current.style.display = 'block';
        } else {
            confirmPasswordMessage.current.innerText = '';
            confirmPasswordMessage.current.style.display = 'none';
        }
    };

    const handleConfirmPassword = () => {
        const confirmPasswordValue = confirmPasswordInput.current.value;
        if (!confirmPasswordValue) {
            confirmPasswordMessage.current.innerText =
                'Vui lòng nhập lại mật khẩu';
            confirmPasswordMessage.current.style.display = 'block';
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <form className={cx('form')}>
                    <h2 className={cx('title')}>Register</h2>

                    <div className={cx('form-group')}>
                        <label className={cx('label')} htmlFor='email'>
                            Email
                        </label>
                        <div className={cx('form-input')}>
                            <label htmlFor='email' className={cx('input-icon')}>
                                <UserIcon />
                            </label>
                            <input
                                onChange={e => setEmail(e.target.value)}
                                onBlur={handleValidateEmail}
                                onInput={handleTypeEmail}
                                value={email}
                                ref={emailInput}
                                className={cx('input')}
                                id='email'
                                name='email'
                                type='email'
                                placeholder='Type your email'
                                spellCheck='none'
                            ></input>
                        </div>
                        <p
                            className={cx('error-message')}
                            ref={emailMessage}
                        ></p>
                    </div>

                    <div className={cx('form-group')}>
                        <label className={cx('label')} htmlFor='password'>
                            Password
                        </label>
                        <div className={cx('form-input')}>
                            <label
                                htmlFor='password'
                                className={cx('input-icon')}
                            >
                                <LockIcon />
                            </label>
                            <input
                                onChange={e => setPassword(e.target.value)}
                                onBlur={handleValidatePassword}
                                onInput={handleTypePassword}
                                ref={passwordInput}
                                value={password}
                                className={cx('input')}
                                id='password'
                                name='password'
                                type='password'
                                placeholder='Type your password'
                            ></input>
                        </div>
                        <p
                            className={cx('error-message')}
                            ref={passwordMessage}
                        ></p>
                    </div>

                    <div className={cx('form-group')}>
                        <label className={cx('label')} htmlFor='password'>
                            Confirm Password
                        </label>
                        <div className={cx('form-input')}>
                            <label
                                htmlFor='confirmPassword'
                                className={cx('input-icon')}
                            >
                                <LockIcon />
                            </label>
                            <input
                                onChange={e =>
                                    setConfirmPassword(e.target.value)
                                }
                                onInput={handleTypeConfirmPassword}
                                onBlur={handleConfirmPassword}
                                value={confirmPassword}
                                ref={confirmPasswordInput}
                                className={cx('input')}
                                id='confirmPassword'
                                type='password'
                                placeholder='Type your password'
                            ></input>
                        </div>
                        <p
                            className={cx('error-message')}
                            ref={confirmPasswordMessage}
                        ></p>
                    </div>

                    <p className={cx('error-message')} ref={validateMessage}>
                        Email không đúng hoặc đã có người sử dụng
                    </p>

                    <div className={cx('navigation')}>
                        <Link className={cx('link')} to='/login'>
                            Already have account? Log in
                        </Link>
                    </div>

                    <Button
                        onClick={handleSubmitForm}
                        className={cx('submit-btn')}
                    >
                        REGISTER
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Register;
