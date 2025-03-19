import classNames from 'classnames/bind';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import style from './VideoBlock.module.scss';
import { WindowFrameIcon } from '~/Components/Icons';

const cx = classNames.bind(style);

function VideoBlock({ userProfile }) {
    const videoRef = useRef();

    const navigate = useNavigate();

    const handlePlayVideo = e => {
        e.target.play();
    };

    const handlePauseVideo = e => {
        e.target.currentTime = 0;
        e.target.pause();
    };

    return userProfile && userProfile.videos.length > 0 ? (
        <div className={cx('video-block')}>
            <p className={cx('title')}>Videos</p>
            <div className={cx('video-list')}>
                {userProfile.videos.map(video => (
                    <video
                        key={video.id}
                        ref={videoRef}
                        poster={video.thumb_url}
                        muted
                        className={cx('video-item')}
                        onMouseEnter={handlePlayVideo}
                        onMouseLeave={handlePauseVideo}
                        onClick={() => navigate(`/videos/${video.id}`)}
                    >
                        <source src={video.file_url} type='video/mp4'></source>
                    </video>
                ))}
            </div>
        </div>
    ) : (
        <div className={cx('no-video-wrapper')}>
            <div className={cx('no-video-block')}>
                <div className={cx('icon-wrap')}>
                    <WindowFrameIcon className={cx('icon')} />
                </div>
                <h2 className={cx('heading')}>Upload your first video</h2>
                <p className={cx('desc')}>Your videos will appear here</p>
            </div>
        </div>
    );
}

VideoBlock.propTypes = {
    userProfile: PropTypes.any,
};

export default VideoBlock;
