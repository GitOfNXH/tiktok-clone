import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './PreviewAccount.module.scss';
import Button from '~/Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function PreviewAccount({ data }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} alt='' src={data.avatar} />
                <Button primary className={cx('follow-btn')}>
                    Following
                </Button>
            </header>
            <div className={cx('body')}>
                <h4 className={cx('user-name')}>
                    <span>{data.nickname}</span>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCircleCheck}
                        />
                    )}
                </h4>
                <p
                    className={cx('name')}
                >{`${data.last_name} ${data.first_name}`}</p>
            </div>
            <p className={cx('statistic')}>
                <strong className={cx('value')}>{data.followers_count} </strong>
                <span>Followings</span>
                <strong className={cx('value')}>{data.likes_count} </strong>
                <span>Likes</span>
            </p>
        </div>
    );
}

PreviewAccount.propTypes = {
    data: PropTypes.object.isRequired,
};

export default PreviewAccount;
