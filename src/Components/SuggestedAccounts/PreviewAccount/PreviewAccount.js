import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import style from './PreviewAccount.module.scss';
import Button from '~/Components/Button';
import Image from '~/Components/Image';

const cx = classNames.bind(style);

function PreviewAccount({ data, following }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image
                    width='44px'
                    height='44px'
                    rounded
                    alt={data.nickname}
                    src={data.avatar}
                />
                <Button primary className={cx('follow-btn')}>
                    {following ? 'Unfollow' : 'Follow'}
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
                >{`${data.first_name} ${data.last_name}`}</p>
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
