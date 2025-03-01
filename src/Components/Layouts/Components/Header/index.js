import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faCircleXmark,
    faSpinner,
    faEllipsisVertical,
    faGlobe,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';

import style from './Header.module.scss';
import images from '~/assets/images';
import { PopperWrapper } from '~/Components/Popper';
import AccountItem from '~/Components/AccountItem';
import Button from '~/Components/Button';
import Menu from '~/Components/Popper/Menu';

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
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
            // setSearchResult([
            //     {
            //         id: 1,
            //         src: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/118441977edc639baf728fd892d500b3~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&nonce=5022&refresh_token=f5508ef7ae856ca5b9f252377ea3170e&x-expires=1740898800&x-signature=Sq0ZUXDX8BbnvrnxtGDxLggVdkw%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474',
            //         name: 'Đào Lê Phương Hoa',
            //         userName: 'hoaa.hanassii',
            //     },
            //     {
            //         id: 2,
            //         src: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/118441977edc639baf728fd892d500b3~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&nonce=5022&refresh_token=f5508ef7ae856ca5b9f252377ea3170e&x-expires=1740898800&x-signature=Sq0ZUXDX8BbnvrnxtGDxLggVdkw%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474',
            //         name: 'Đào Lê Phương Hoa',
            //         userName: 'hoaa.hanassii',
            //     },
            //     {
            //         id: 3,
            //         src: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/118441977edc639baf728fd892d500b3~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&nonce=5022&refresh_token=f5508ef7ae856ca5b9f252377ea3170e&x-expires=1740898800&x-signature=Sq0ZUXDX8BbnvrnxtGDxLggVdkw%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474',
            //         name: 'Đào Lê Phương Hoa',
            //         userName: 'hoaa.hanassii',
            //     },
            //     {
            //         id: 4,
            //         src: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/118441977edc639baf728fd892d500b3~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&nonce=5022&refresh_token=f5508ef7ae856ca5b9f252377ea3170e&x-expires=1740898800&x-signature=Sq0ZUXDX8BbnvrnxtGDxLggVdkw%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474',
            //         name: 'Đào Lê Phương Hoa',
            //         userName: 'hoaa.hanassii',
            //     },
            // ]);
        }, 0);
    }, []);

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

                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div
                            className={cx('search-result')}
                            tabIndex='-1'
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <ul className={cx('result-list')}>
                                    {searchResult.map(accountItem => (
                                        <li key={accountItem.id}>
                                            <AccountItem
                                                src={accountItem.src}
                                                name={accountItem.name}
                                                userName={accountItem.userName}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder='Search accounts and video'
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content='Upload video'
                                placement='bottom'
                            >
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
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
                            <img
                                className={cx('user-avatar')}
                                src='https://showbizvietnam.vn/wp-content/uploads/2024/01/Dao_Le_Phuong_Hoa_4.jpg'
                                alt='Đào Lê Phương Hoa'
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
