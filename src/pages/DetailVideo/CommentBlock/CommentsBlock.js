import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import style from './CommentsBlock.module.scss';
import Button from '~/Components/Button';
import { AtSignIcon, EmoteIcon } from '~/Components/Icons';
import * as httpRequest from '~/services/commentService';
import CommentBlock from './CommentBlock';

const cx = classNames.bind(style);

function CommentsBlock({ data }) {
    const [activeTab, setActiveTab] = useState('comment');
    const [comments, setComments] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            if (data) {
                const response = await httpRequest.getCommentList(data.id, 1);
                setComments(response.data);
            }
        };

        fetchApi();
    }, [data]);

    return (
        <article className={cx('wrapper')}>
            <header className={cx('header')}>
                <Button
                    onClick={() => setActiveTab('comment')}
                    className={cx('tab', { active: activeTab === 'comment' })}
                >
                    {`Comment (${data ? data.comments_count : 0})`}
                </Button>
                <Button
                    onClick={() => setActiveTab('creator')}
                    className={cx('tab', { active: activeTab === 'creator' })}
                >
                    Creator videos
                </Button>
            </header>

            <div className={cx('body')}>
                {comments &&
                    comments.map(comment => (
                        <CommentBlock key={comment.id} data={comment} />
                    ))}
            </div>

            <footer className={cx('footer')}>
                <div className={cx('input-wrap')}>
                    <input className={cx('input')} placeholder='Add comment' />
                    <div className={cx('icons')}>
                        <div className={cx('icon-wrap')}>
                            <AtSignIcon />
                        </div>
                        <div className={cx('icon-wrap')}>
                            <EmoteIcon />
                        </div>
                    </div>
                </div>
                <Button className={cx('post-btn')}>Post</Button>
            </footer>
        </article>
    );
}

CommentsBlock.propTypes = {
    data: PropTypes.object,
};

export default CommentsBlock;
