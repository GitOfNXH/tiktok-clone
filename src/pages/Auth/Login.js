import classNames from 'classnames/bind';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as httpRequest from '~/services/authService';
import style from './Auth.module.scss';
import { LockIcon, UserIcon } from '~/Components/Icons';
import Button from '~/Components/Button';
import { ToastContext } from '~/constants';

const cx = classNames.bind(style);

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toastMessage = useContext(ToastContext);

    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const fetchApi = async () => {
            const response = await httpRequest.postLogin({
                email,
                password,
            });

            if (response) {
                localStorage.setItem('token', response.meta.token);
                localStorage.setItem('userData', JSON.stringify(response.data));
                navigate('/');
                toastMessage('success', 'Đăng nhập thành công!');
            } else {
                toastMessage(
                    'error',
                    'Thông tin về tài khoản hoặc mật khẩu không chính xác!'
                );
            }
        };
        fetchApi();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <form className={cx('form')}>
                    <h2 className={cx('title')}>Login</h2>

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

                    <div className={cx('navigation')}>
                        <Link className={cx('link')} to='/register'>
                            Don't have an account? Sign up
                        </Link>
                        <Link className={cx('link')} to='/'>
                            Back to Home page
                        </Link>
                    </div>

                    <Button className={cx('submit-btn')} onClick={handleLogin}>
                        LOGIN
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
