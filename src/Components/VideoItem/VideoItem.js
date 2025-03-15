import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';

import style from './VideoItem.module.scss';
import Video from '../Video';
import Image from '../Image';
import {
    HomeHeartIcon,
    HomeMessageIcon,
    HomeSaveIcon,
    HomeShareIcon,
    PlusIcon,
} from '../Icons/Icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

const VideoItem = forwardRef(({ data, handleCommentActive }, ref) => {
    const [heartActive, setHeartActive] = useState(false);
    const [saveActive, setSaveActive] = useState(false);

    const handleHeartActive = () => {
        setHeartActive(prev => !prev);
    };

    const handleSaveActive = () => {
        setSaveActive(prev => !prev);
    };

    return (
        <article className={cx('video-item')}>
            <div className={cx('video-wrap')}>
                <div className={cx('video-block')}>
                    <Video
                        ref={ref}
                        className={cx('video')}
                        src={data.file_url}
                        poster={data.thumb_url}
                    />
                </div>
                <div className={cx('video-actions')}>
                    <Link
                        to={`/@${data.user.nickname}`}
                        className={cx('profile')}
                    >
                        <Image
                            width={48}
                            height={48}
                            rounded
                            src={data.user.avatar}
                        />
                        <div className={cx('follow')}>
                            <PlusIcon />
                        </div>
                    </Link>
                    <div>
                        <div
                            className={cx('action', 'heart', {
                                active: heartActive,
                            })}
                            onClick={handleHeartActive}
                        >
                            <HomeHeartIcon />
                        </div>
                        <p className={cx('statistic')}>{data.likes_count}</p>
                    </div>
                    <div>
                        <div
                            className={cx('action')}
                            onClick={handleCommentActive}
                        >
                            <HomeMessageIcon />
                        </div>
                        <p className={cx('statistic')}>{data.comments_count}</p>
                    </div>
                    <div>
                        <div
                            className={cx('action', 'save', {
                                active: saveActive,
                            })}
                            onClick={handleSaveActive}
                        >
                            <HomeSaveIcon />
                        </div>
                        <p className={cx('statistic')}>0</p>
                    </div>
                    <div>
                        <div className={cx('action')}>
                            <HomeShareIcon className={cx('share')} />
                        </div>
                        <p className={cx('statistic')}>{data.shares_count}</p>
                    </div>

                    <div className={cx('music-cover-disc')}>
                        <Image
                            width={48}
                            height={48}
                            rounded
                            src={data.user.avatar}
                        />
                    </div>
                </div>
            </div>
        </article>
    );
});

VideoItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default VideoItem;
