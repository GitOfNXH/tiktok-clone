import classNames from 'classnames/bind';
import TimeAgo from '~/constants/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Image from '~/Components/Image';
import style from './CommentBlock.module.scss';
import { ThreeDotsIcon } from '~/Components/Icons';
import { HeartRegularIcon, HomeHeartIcon } from '~/Components/Icons/Icons';
import * as httpRequest from '~/services/likeService';

const cx = classNames.bind(style);

function CommentBlock({ data }) {
    const [likeComment, setLikeComment] = useState('unlike');
    const [comment, setComment] = useState(data);

    const handleLikeComment = () => {
        setLikeComment(likeComment === 'like' ? 'unlike' : 'like');
        const fetchApi = async () => {
            const type = likeComment === 'unlike' ? 'like' : 'unlike';
            const response = await httpRequest.likeComment(comment.id, type);
            setComment(response);
        };

        fetchApi();
    };

    return (
        <article key={comment.id} className={cx('wrapper')}>
            <Link to={`/@${comment.user.username}`}>
                <Image
                    width='40'
                    height='40'
                    rounded
                    src={comment.user.avatar}
                />
            </Link>
            <div className={cx('info')}>
                <h4
                    className={cx('name')}
                >{`${comment.user.first_name} ${comment.user.last_name}`}</h4>
                <p className={cx('comment')}>{comment.comment}</p>
                <div className={cx('reply-block')}>
                    <span className={cx('time-upload')}>
                        {TimeAgo(comment.created_at.replace(' ', 'T'))}
                    </span>
                    <span className={cx('reply')}>Reply</span>
                </div>
            </div>
            <div className={cx('actions')}>
                <ThreeDotsIcon width='24' height='24' className={cx('more')} />
                <div className={cx('heart-wrap')} onClick={handleLikeComment}>
                    {likeComment === 'unlike' ? (
                        <HeartRegularIcon />
                    ) : (
                        <HomeHeartIcon className={cx('heart-active')} />
                    )}
                </div>
                <span>{comment.likes_count}</span>
            </div>
        </article>
    );
}

export default CommentBlock;
