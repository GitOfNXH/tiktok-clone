import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faExclamationCircle,
    faInfoCircle,
    faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

import style from './ToastMessage.module.scss';

const cx = classNames.bind(style);

function ToastMessage({ success, error, info, warning, message }) {
    const toastRef = useRef();

    return (
        <article ref={toastRef} className={cx('wrapper')}>
            <div className={cx('toast', { success, error, info, warning })}>
                <div className={cx('icon-wrap')}>
                    {success && <FontAwesomeIcon icon={faCheckCircle} />}
                    {error && <FontAwesomeIcon icon={faTimesCircle} />}
                    {info && <FontAwesomeIcon icon={faInfoCircle} />}
                    {warning && <FontAwesomeIcon icon={faExclamationCircle} />}
                </div>

                <div className={cx('content')}>
                    <>
                        <p className={cx('title')}>{success && 'Success'}</p>
                        <p className={cx('title')}>{error && 'Error'}</p>
                        <p className={cx('title')}>{info && 'Info'}</p>
                        <p className={cx('title')}>{warning && 'Warning'}</p>
                    </>
                    <p className={cx('message')}>{message}</p>
                </div>

                <div className={cx('progress')}></div>

                <button
                    onClick={() => (toastRef.current.style.display = 'none')}
                    className={cx('close')}
                >
                    &times;
                </button>
            </div>
        </article>
    );
}

export default ToastMessage;
