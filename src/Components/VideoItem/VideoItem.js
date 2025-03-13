import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

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

const cx = classNames.bind(style);

function VideoItem({ data }) {
    return (
        <article className={cx('video-item')}>
            <div className={cx('video-wrap')}>
                <div className={cx('video-block')}>
                    <Video
                        className={cx('video')}
                        src={data.file_url}
                        poster={data.thumb_url}
                    />
                </div>
                <div className={cx('video-actions')}>
                    <div className={cx('profile')}>
                        <Image
                            width={48}
                            height={48}
                            rounded
                            src={data.user.avatar}
                        />
                        <div className={cx('follow')}>
                            <PlusIcon />
                        </div>
                    </div>
                    <div>
                        <div className={cx('action')}>
                            <HomeHeartIcon />
                        </div>
                        <p className={cx('statistic')}>{data.likes_count}</p>
                    </div>
                    <div>
                        <div className={cx('action')}>
                            <HomeMessageIcon />
                        </div>
                        <p className={cx('statistic')}>{data.comments_count}</p>
                    </div>
                    <div>
                        <div className={cx('action')}>
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
}

VideoItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default VideoItem;
