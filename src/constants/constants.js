import {
    faGlobe,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatDistanceToNow } from 'date-fns';
import { createContext } from 'react';

import {
    ProfileLikedIcon,
    ProfileReportsIcon,
    ProfileVideosIcon,
    HomeIcon,
    FollowingIcon,
    LiveIcon,
    HomeActiveIcon,
    FollowingActiveIcon,
    LiveActiveIcon,
} from '~/Components/Icons';
import config from '~/configs';

export const getCurrentUser = () =>
    JSON.parse(localStorage.getItem('userData'));

export const getToken = () => localStorage.getItem('token');

export const profileTabs = [
    { id: 1, label: 'Videos', icon: ProfileVideosIcon },
    { id: 2, label: 'Reports', icon: ProfileReportsIcon },
    { id: 3, label: 'Liked', icon: ProfileLikedIcon },
];

export const profileControls = [
    { id: 1, label: 'Latest' },
    { id: 2, label: 'Popular' },
    { id: 3, label: 'Oldest' },
];

export const headerMenuItems = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const currentUser = getCurrentUser();
export const headerMenuUser = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: `/@${currentUser.nickname}`,
        type: '',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    ...headerMenuItems,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        type: 'logout',
        separate: true,
    },
];

export default function TimeAgo(uploadTime) {
    const timeAgo = formatDistanceToNow(new Date(uploadTime), {
        addSuffix: true,
    });

    return timeAgo;
}

export const ToastContext = createContext();

export const menuItems = [
    {
        to: config.routes.home,
        icon: HomeIcon,
        activeIcon: HomeActiveIcon,
        title: 'For You',
    },
    {
        to: config.routes.following,
        icon: FollowingIcon,
        activeIcon: FollowingActiveIcon,
        title: 'Following',
    },
    {
        to: config.routes.live,
        icon: LiveIcon,
        activeIcon: LiveActiveIcon,
        title: 'LIVE',
    },
];
