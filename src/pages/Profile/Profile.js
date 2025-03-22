import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';

import style from './Profile.module.scss';
import Image from '~/Components/Image';
import Button from '~/Components/Button';
import { GearIcon, RightArrowIcon, ThreeDotsIcon } from '~/Components/Icons';
import * as httpRequest from '~/services/userService';
import { profileTabs, profileControls } from '~/constants';
import { getCurrentUser } from '~/constants';
import VideoBlock from './VideoBlock';
import ToastMessage from '~/Components/ToastMessage';
import ProfileModal from './ProfileModal';

const cx = classNames.bind(style);
const currentUser = getCurrentUser();

function Profile() {
    const [tabActive, setTabActive] = useState(1);
    const [controlActive, setControlActive] = useState(1);
    const [userProfile, setUserProfile] = useState();
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const { nickname } = useParams();

    useEffect(() => {
        const fetchApi = async () => {
            if (nickname) {
                const response = await httpRequest.getUser(nickname);
                setUserProfile(response);
            }
        };

        fetchApi();
    }, [nickname]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setShowToast(false);
        }, 4000);

        return () => clearTimeout(timerId);
    }, [showToast]);

    const handleActiveTab = tab => {
        if (tabActive !== tab.id) {
            setTabActive(tab.id);
        }
    };

    const handleActiveControl = control => {
        if (controlActive !== control.id) {
            setControlActive(control.id);
        }
    };

    const handleShowEditProfile = () => {
        setShowProfileModal(true);
        document.documentElement.style.overflow = 'hidden';
        const sidebar = document.querySelector('[class^="Sidebar_wrapper"]');
        sidebar.style.overflow = 'hidden';
        sidebar.style.zIndex = '-1';
    };

    const handleHideEditProfile = () => {
        setShowProfileModal(false);
        document.documentElement.style.overflow = 'auto';
        const sidebar = document.querySelector('[class^="Sidebar_wrapper"]');
        sidebar.style.overflow = 'auto';
        sidebar.style.zIndex = '3';
        setShowToast(true);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('avatar-wrap')}>
                    <Image
                        src={userProfile?.avatar}
                        alt={userProfile?.nickname}
                        width='100%'
                        hight='100%'
                        rounded
                    />
                </div>
                <div className={cx('info')}>
                    <div className={cx('user-text')}>
                        <h3 className={cx('user-name')}>
                            {userProfile?.nickname}
                        </h3>
                        <p className={cx('name')}>
                            {`${userProfile?.first_name} ${userProfile?.last_name}`}
                        </p>
                    </div>
                    <div className={cx('header-cta')}>
                        {userProfile &&
                            (userProfile.id === currentUser.id ? (
                                <>
                                    <Button
                                        className={cx('btn')}
                                        primary
                                        onClick={handleShowEditProfile}
                                    >
                                        Edit profile
                                    </Button>
                                    <Button className={cx('btn')} secondary>
                                        Promote post
                                    </Button>
                                    <Button
                                        className={cx('icon-btn')}
                                        secondary
                                    >
                                        <GearIcon />
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button className={cx('btn')} primary>
                                        {userProfile.is_followed
                                            ? 'Unfollow'
                                            : 'Follow'}
                                    </Button>
                                    <Button className={cx('btn')} secondary>
                                        Message
                                    </Button>
                                </>
                            ))}
                        <Button className={cx('icon-btn')} secondary>
                            <RightArrowIcon />
                        </Button>
                        {userProfile?.id !== currentUser.id && (
                            <Button className={cx('icon-btn')} secondary>
                                <ThreeDotsIcon />
                            </Button>
                        )}
                    </div>
                    <div className={cx('statistic')}>
                        <p>
                            <strong className={cx('qtn')}>
                                {userProfile
                                    ? userProfile.followings_count
                                    : ' '}
                            </strong>
                            Following
                        </p>
                        <p>
                            <strong className={cx('qtn')}>
                                {userProfile
                                    ? userProfile.followers_count
                                    : ' '}
                            </strong>
                            Followers
                        </p>
                        <p>
                            <strong className={cx('qtn')}>
                                {userProfile ? userProfile.likes_count : ' '}
                            </strong>
                            Likes
                        </p>
                    </div>

                    <p className={cx('bio')}>
                        {userProfile ? userProfile.bio || 'No bio yet' : ''}
                    </p>
                </div>
            </header>

            <div className={cx('body')}>
                <div className={cx('feed-tab-wrapper')}>
                    <div className={cx('video-feed-tab')}>
                        {profileTabs.map(tab => (
                            <p
                                key={tab.id}
                                className={cx('tab', {
                                    active: tabActive === tab.id,
                                })}
                                onClick={() => handleActiveTab(tab)}
                            >
                                <tab.icon />
                                <span>{tab.label}</span>
                            </p>
                        ))}
                    </div>
                    <div className={cx('segment-controls')}>
                        {profileControls.map(control => (
                            <Button
                                onClick={() => handleActiveControl(control)}
                                key={control.id}
                                className={cx('control', {
                                    active: controlActive === control.id,
                                })}
                            >
                                {control.label}
                            </Button>
                        ))}
                    </div>
                </div>

                <VideoBlock userProfile={userProfile} />
            </div>

            {showProfileModal && (
                <ProfileModal
                    data={userProfile}
                    hideModal={handleHideEditProfile}
                />
            )}

            {showToast && (
                <ToastMessage
                    success
                    message='Thay đổi thông tin cá nhân thành công!'
                />
            )}
        </div>
    );
}

export default Profile;
