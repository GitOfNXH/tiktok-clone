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
    const currentUser = true;

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
                <img src={images.logo} alt='Tiktok' />

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

                            <button className={cx('action-btn')}>
                                <MessagesIcon />
                            </button>

                            <button className={cx('action-btn', 'activity')}>
                                <ActivityIcon />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? menuUser : menuItems}
                        onchange={handleChangeItem}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src='data:image/jpeg;base64,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'
                                alt='Đào Lê Phương Hoa'
                                fallback='data:image/jpeg;base64,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'
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
