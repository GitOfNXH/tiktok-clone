import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import TimeAgo from '~/constants/constants';
import * as httpRequest from '~/services/videoService';
import { likeVideo as requestLikeVideo } from '~/services/likeService';
import style from './DetailVideo.module.scss';
import Button from '~/Components/Button';
import { MusicIcon } from '~/Components/Icons';
import {
    EmbedIcon,
    FacebookIcon,
    HomeHeartIcon,
    HomeMessageIcon,
    HomeSaveIcon,
    HomeShareIcon,
    ReportIcon,
    SendIcon,
    WhatsAppIcon,
} from '~/Components/Icons/Icons';
import Image from '~/Components/Image';
import CommentsBlock from './CommentBlock';

const cx = classNames.bind(style);

function DetailVideo() {
    const [video, setVideo] = useState();
    const [copied, setCopied] = useState(false);
    const [likeVideo, setLikeVideo] = useState('unlike');

    const linkRef = useRef(null);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const video = await httpRequest.getVideo(
                    window.location.pathname
                );
                setVideo(video);
                console.log(video);
            } catch (error) {
                console.log(error);
            }
        };

        fetchApi();
    }, []);

    const handleCopy = () => {
        const linkText = linkRef.current.innerText;
        navigator.clipboard.writeText(linkText).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 5000);
        });
    };

    const handleLikeVideo = () => {
        setLikeVideo(likeVideo === 'like' ? 'unlike' : 'like');
        const fetchApi = async () => {
            const type = likeVideo === 'unlike' ? 'like' : 'unlike';
            const response = await requestLikeVideo(video.id, type);
            setVideo(response);
        };

        fetchApi();
    };

    return (
        <main className={cx('wrapper')}>
            <div className={cx('video-wrap')}>
                <div className={cx('video-block')}>
                    <video
                        className={cx('video')}
                        poster={video && video.thumb_url}
                    >
                        <source
                            src={video && video.file_url}
                            type='video/mp4'
                        ></source>
                    </video>
                </div>
            </div>

            <div className={cx('info-wrapper')}>
                <article className={cx('video-info')}>
                    <header className={cx('header')}>
                        <div className={cx('user-info')}>
                            <Link
                                to={video && `/@${video.user.nickname}`}
                                className={cx('info')}
                            >
                                <Image
                                    width={40}
                                    height={40}
                                    rounded
                                    src={video && video.user.avatar}
                                    alt={video && video.user.nickname}
                                />
                                <div>
                                    <div>
                                        <h4 className={cx('nickname')}>
                                            {video ? video.user.nickname : ''}
                                        </h4>
                                        {video
                                            ? video.user.tick && (
                                                  <FontAwesomeIcon
                                                      className={cx('check')}
                                                      icon={faCheckCircle}
                                                  />
                                              )
                                            : null}
                                    </div>
                                    <div className={cx('name')}>
                                        {video &&
                                            `${video.user.first_name} ${video.user.last_name}`}
                                        <span className={cx('dot')}>.</span>
                                        <span>
                                            {video &&
                                                TimeAgo(
                                                    video.published_at.replace(
                                                        ' ',
                                                        'T'
                                                    )
                                                )}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            <Button primary>
                                {video && video.user.is_followed
                                    ? 'Following'
                                    : 'Follow'}
                            </Button>
                        </div>
                        <p className={cx('description')}>
                            {video && video.description}
                        </p>
                        <Link to='!@'>
                            <MusicIcon />
                            <span className={cx('music-link')}>
                                Âm thanh trong video!
                            </span>
                        </Link>
                    </header>

                    <div className={cx('video-actions')}>
                        <div className={cx('action')}>
                            <div
                                onClick={handleLikeVideo}
                                className={cx('icon-wrap')}
                            >
                                <HomeHeartIcon
                                    className={cx('icon', 'heart', {
                                        active: likeVideo === 'like',
                                    })}
                                />
                            </div>
                            <p className={cx('statistic')}>
                                {video && video.likes_count}
                            </p>
                        </div>
                        <div className={cx('action')}>
                            <div className={cx('icon-wrap')}>
                                <HomeMessageIcon className={cx('icon')} />
                            </div>
                            <p className={cx('statistic')}>
                                {video && video.comments_count}
                            </p>
                        </div>
                        <div className={cx('action')}>
                            <div className={cx('icon-wrap')}>
                                <HomeSaveIcon className={cx('icon')} />
                            </div>
                            <p className={cx('statistic')}>0</p>
                        </div>
                        <div className={cx('share-block')}>
                            <div className={cx('share-method')}>
                                <ReportIcon />
                                <EmbedIcon />
                                <SendIcon />
                                <FacebookIcon />
                                <WhatsAppIcon />
                                <div className={cx('share')}>
                                    <HomeShareIcon
                                        className={cx('icon')}
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('link-block')}>
                        <span ref={linkRef} className={cx('link-text')}>
                            {window.location.href}
                        </span>
                        <Button onClick={handleCopy} className={cx('link-btn')}>
                            {copied ? 'Copied!' : 'Copy link'}
                        </Button>
                    </div>
                </article>
                <CommentsBlock data={video} />
            </div>
        </main>
    );
}

export default DetailVideo;
