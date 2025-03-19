import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import EmojiPicker from 'emoji-picker-react';

import style from './CommentsBlock.module.scss';
import Button from '~/Components/Button';
import { AtSignIcon, EmoteIcon } from '~/Components/Icons';
import * as httpRequest from '~/services/commentService';
import CommentBlock from './CommentBlock';

const cx = classNames.bind(style);

function CommentsBlock({ data }) {
    const [activeTab, setActiveTab] = useState('comment');
    const [comments, setComments] = useState();
    const [inputText, setInputText] = useState('');
    const [showPicker, setShowPicker] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        const fetchApi = async () => {
            if (data) {
                const response = await httpRequest.getCommentList(data.id, 1);
                setComments(response.data);
            }
        };
        fetchApi();
    }, [data]);

    const handleInputChange = e => {
        setInputText(e.target.value);
    };

    const handlePostComment = () => {
        const fetchApi = async () => {
            const response = await httpRequest.postComment(data.id, inputText);
            setComments(prev => [...prev, response.data]);
        };
        fetchApi();
        setInputText('');
        inputRef.current.focus();
    };

    const handleEmojiClick = emojiData => {
        setInputText(prev => prev + emojiData.emoji);
        setShowPicker(false);
    };

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
                {showPicker && (
                    <EmojiPicker
                        onEmojiClick={handleEmojiClick}
                        style={{
                            position: 'absolute',
                            right: '92px',
                            bottom: '60px',
                        }}
                    />
                )}

                <div className={cx('input-wrap')}>
                    <input
                        onChange={handleInputChange}
                        value={inputText}
                        ref={inputRef}
                        className={cx('input')}
                        placeholder='Add comment'
                    />

                    <div className={cx('icons')}>
                        <div className={cx('icon-wrap')}>
                            <AtSignIcon />
                        </div>
                        <div
                            className={cx('icon-wrap')}
                            onClick={() => setShowPicker(!showPicker)}
                        >
                            <EmoteIcon />
                        </div>
                    </div>
                </div>
                <Button
                    onClick={handlePostComment}
                    className={cx('post-btn', { active: inputText })}
                >
                    Post
                </Button>
            </footer>
        </article>
    );
}

CommentsBlock.propTypes = {
    data: PropTypes.object,
};

export default CommentsBlock;
