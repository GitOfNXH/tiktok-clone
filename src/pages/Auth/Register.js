import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { postRegister } from '~/services/authService';
import style from './Auth.module.scss';
import { LockIcon, UserIcon } from '~/Components/Icons';
import Button from '~/Components/Button';

const cx = classNames.bind(style);

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const loginLinkRef = useRef();

    const handleSubmitForm = e => {
        e.preventDefault();
        const fetchApi = async () => {
            try {
                const response = await postRegister({
                    type: 'email',
                    email: email,
                    password: password,
                });
                if (response) {
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                    alert('Bạn đã đăng ký tài khoản thành công!');
                    loginLinkRef.current.click();
                }
            } catch (error) {
                throw new Error(error);
            }
        };
        fetchApi();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <form className={cx('form')}>
                    <h2 className={cx('title')}>Register</h2>

                    <label className={cx('label')} htmlFor='email'>
                        Email
                    </label>
                    <div className={cx('form-input')}>
                        <label htmlFor='email' className={cx('input-icon')}>
                            <UserIcon />
                        </label>
                        <input
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            className={cx('input')}
                            id='email'
                            name='email'
                            type='email'
                            placeholder='Type your email'
                        ></input>
                    </div>

                    <label className={cx('label')} htmlFor='password'>
                        Password
                    </label>
                    <div className={cx('form-input')}>
                        <label htmlFor='password' className={cx('input-icon')}>
                            <LockIcon />
                        </label>
                        <input
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            className={cx('input')}
                            id='password'
                            name='password'
                            type='password'
                            placeholder='Type your password'
                        ></input>
                    </div>

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
                            onChange={e => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            className={cx('input')}
                            id='confirmPassword'
                            type='password'
                            placeholder='Type your password'
                        ></input>
                    </div>

                    <div className={cx('navigation')}>
                        <Link
                            ref={loginLinkRef}
                            className={cx('link')}
                            to='/login'
                        >
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
