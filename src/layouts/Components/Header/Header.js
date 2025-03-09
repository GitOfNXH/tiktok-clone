import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faGlobe,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getCurrentUserSelector } from '~/app/selectors';
import config from '~/configs';
import style from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/Components/Button';
import Menu from '~/Components/Popper/Menu';
import { ActivityIcon, MessagesIcon, UploadIcon } from '~/Components/Icons';
import Image from '~/Components/Image';
import Search from '../Search';

const cx = classNames.bind(style);

const menuItems = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
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

const menuUser = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa',
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
    ...menuItems,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = useSelector(getCurrentUserSelector).data;

    const handleChangeItem = item => {
        switch (item.type) {
            case 'Language':
                console.log('Xu ly thay doi ngon ngu');
                break;
            default:
                throw new Error('Invalid type');
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <Link className={cx('logo-link')} to={config.routes.home}>
                    <img src={images.logo} alt='Tiktok' />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content='Upload video'
                                placement='bottom'
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy
                                delay={[0, 200]}
                                content='Message'
                                placement='bottom'
                            >
                                <button className={cx('action-btn')}>
                                    <MessagesIcon />
                                </button>
                            </Tippy>

                            <Tippy
                                delay={[0, 200]}
                                content='Activity'
                                placement='bottom'
                            >
                                <button
                                    className={cx('action-btn', 'activity')}
                                >
                                    <ActivityIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary to='/login'>
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? menuUser : menuItems}
                        onchange={handleChangeItem}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src={currentUser.avatar}
                                alt={`${currentUser.first_name} ${currentUser.last_name}`}
                            />
                        ) : (
                            <button>
                                <FontAwesomeIcon
                                    className={cx('menu')}
                                    icon={faEllipsisVertical}
                                />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
