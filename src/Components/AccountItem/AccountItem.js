import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './AccountItem.module.scss';

const cx = classNames.bind(style);

function AccountItem({ data, className }) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/@${data.nickname}`);
    };

    return (
        <article
            onClick={handleNavigate}
            className={cx('wrapper', { [className]: className })}
        >
            <img
                className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        />
                    )}
                </h4>
                <p className={cx('user-name')}>{data.nickname}</p>
            </div>
        </article>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
