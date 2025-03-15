import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './VideoBlock.module.scss';
import { WindowFrameIcon } from '~/Components/Icons';
import Video from '~/Components/Video';

const cx = classNames.bind(style);

function VideoBlock({ userProfile }) {
    return userProfile && userProfile.videos.length > 0 ? (
        <div className={cx('video-block')}>
            <p className={cx('title')}>Videos</p>
            <div className={cx('video-list')}>
                {userProfile.videos.map(video => (
                    <Video
                        key={video.id}
                        src={video.file_url}
                        poster={video.thumb_url}
                        controls
                        muted
                        className={cx('video-item')}
                    />
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
