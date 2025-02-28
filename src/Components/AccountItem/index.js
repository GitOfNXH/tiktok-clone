import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import style from './AccountItem.module.scss';

const cx = classNames.bind(style);

function AccountItem({ src, name, userName }) {
    return (
        <article className={cx('wrapper')}>
            <img className={cx('avatar')} src={src} alt={name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{name}</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <p className={cx('user-name')}>{userName}</p>
            </div>
        </article>
    );
}

export default AccountItem;
