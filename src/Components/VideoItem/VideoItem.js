import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import style from './VideoItem.module.scss';
import Video from './Video';
import Image from '../Image';
import {
    CheckIcon,
    HomeHeartIcon,
    HomeMessageIcon,
    HomeSaveIcon,
    HomeShareIcon,
    PlusIcon,
} from '~/Components/Icons/Icons';
import { likeVideo } from '~/services/likeService';
import * as httpRequest from '~/services/followService';

const cx = classNames.bind(style);

const VideoItem = forwardRef(({ data }, ref) => {
    const [heartActive, setHeartActive] = useState(
        data.is_liked ? 'like' : 'unlike'
    );
    const [saveActive, setSaveActive] = useState(false);
    const [newData, setNewData] = useState();
    const [follow, setFollow] = useState(
        data.user.is_followed ? 'unfollow' : 'follow'
    );

    const navigate = useNavigate();

    const handleHeartActive = () => {
        let type;
        if (heartActive === 'unlike') {
            setHeartActive('like');
            type = 'like';
        } else {
            setHeartActive('unlike');
            type = 'unlike';
        }
        const fetchApi = async () => {
            const res = await likeVideo(data.id, type);
            setNewData(res);
        };
        fetchApi();
    };

    const handleSaveActive = () => {
        setSaveActive(prev => !prev);
    };

    const handleCommentActive = () => {
        navigate(`/videos/${data.id}`);
    };

    const handleFollow = async () => {
        const response = await httpRequest.Follow(data.user.id, follow);
        setFollow(response.is_followed ? 'unfollow' : 'follow');
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
                    <div className={cx('profile')}>
                        <Link
                            to={`/@${data.user.nickname}`}
                            className={cx('avatar')}
                        >
                            <Image
                                width={48}
                                height={48}
                                rounded
                                src={data.user.avatar}
                            />
                        </Link>
                        <div className={cx('follow')} onClick={handleFollow}>
                            {follow === 'follow' ? <PlusIcon /> : <CheckIcon />}
                        </div>
                    </div>
                    <div>
                        <div
                            className={cx('action', 'heart', {
                                active: newData
                                    ? newData.is_liked
                                    : data.is_liked,
                            })}
                            onClick={handleHeartActive}
                        >
                            <HomeHeartIcon />
                        </div>
                        <p className={cx('statistic')}>
                            {newData ? newData.likes_count : data.likes_count}
                        </p>
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
