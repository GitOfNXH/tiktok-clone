import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import style from './ProfileModal.module.scss';
import { CloseRegularIcon, PencilIcon } from '~/Components/Icons';
import Image from '~/Components/Image';
import Button from '~/Components/Button';

const cx = classNames.bind(style);

function ProfileModal({ data, hideModal }) {
    const [file, setFile] = useState();
    const [avatarSrc, setAvatarSrc] = useState(data?.avatar);
    const [username, setUsername] = useState(data?.nickname);
    const [name, setName] = useState(`${data?.first_name} ${data?.last_name}`);
    const [bio, setBio] = useState(data?.bio);

    useEffect(() => {
        if (!file) return;

        const src = URL.createObjectURL(file);
        setAvatarSrc(src);

        return () => URL.revokeObjectURL(src);
    }, [file]);

    const inputFileRef = useRef();

    const handleFileChange = e => {
        const fileSelected = e.target.files[0];
        if (fileSelected) setFile(fileSelected);
    };

    const handleUsername = e => {
        setUsername(e.target.value);
    };

    const handleNameChange = e => {
        setName(e.target.value);
    };

    const handleBioChange = e => {
        setBio(e.target.value);
    };

    const handleProfileChange = () => {
        // Api lỗi, không thay đổi được info :((
        hideModal();
    };

    const handleCloseModal = () => {
        hideModal();
    };

    return (
        <article className={cx('wrapper')}>
            <div className={cx('overlay')}></div>
            <div className={cx('inner')}>
                <div className={cx('content')}>
                    <header className={cx('header')}>
                        <h2 className={cx('title')}>Edit profile</h2>
                        <div onClick={handleCloseModal}>
                            <CloseRegularIcon className={cx('close')} />
                        </div>
                    </header>

                    <div className={cx('body')}>
                        <div className={cx('field')}>
                            <h3 className={cx('field-title')}>Profile photo</h3>
                            <div className={cx('avatar-wrap')}>
                                <Image
                                    src={avatarSrc}
                                    width='96'
                                    height='96'
                                    rounded
                                />
                                <input
                                    type='file'
                                    hidden
                                    ref={inputFileRef}
                                    accept='image'
                                    onChange={handleFileChange}
                                />
                                <div
                                    className={cx('icon-wrap')}
                                    onClick={() => {
                                        inputFileRef.current.click();
                                    }}
                                >
                                    <PencilIcon />
                                </div>
                            </div>
                        </div>
                        <div className={cx('field')}>
                            <h3 className={cx('field-title')}>Username</h3>
                            <div className={cx('field-content')}>
                                <input
                                    value={username}
                                    className={cx('input')}
                                    spellCheck={false}
                                    onChange={handleUsername}
                                />
                                <p className={cx('profile-link')}>
                                    {window.location.href}
                                </p>
                                <p className={cx('desc')}>
                                    Your username can be changed once every 30
                                    days
                                </p>
                            </div>
                        </div>
                        <div className={cx('field')}>
                            <h3 className={cx('field-title')}>Name</h3>
                            <div className={cx('field-content')}>
                                <input
                                    value={name}
                                    className={cx('input')}
                                    spellCheck={false}
                                    onChange={handleNameChange}
                                />
                                <p className={cx('desc')}>
                                    Your username can be changed once every 30
                                    days
                                </p>
                            </div>
                        </div>
                        <div className={cx('field')}>
                            <h3 className={cx('field-title')}>Bio</h3>
                            <div className={cx('field-content')}>
                                <textarea
                                    value={bio}
                                    placeholder={bio || 'Bio'}
                                    className={cx('bio')}
                                    spellCheck={false}
                                    onChange={handleBioChange}
                                />
                            </div>
                        </div>
                    </div>

                    <footer className={cx('footer')}>
                        <Button
                            className={cx('outline-btn')}
                            outline
                            onClick={handleCloseModal}
                        >
                            Cancel
                        </Button>
                        <Button
                            primary
                            disable={
                                avatarSrc === data?.avatar &&
                                username === data?.nickname &&
                                name ===
                                    `${data?.first_name} ${data?.last_name}` &&
                                bio === data?.bio
                            }
                            onClick={handleProfileChange}
                        >
                            Save
                        </Button>
                    </footer>
                </div>
            </div>
        </article>
    );
}

export default ProfileModal;
