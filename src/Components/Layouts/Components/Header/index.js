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
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
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

function Header() {
    const [searchResult, setSearchResult] = useState([]);

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
    });

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <img src={images.logo} alt='Tiktok' />

                <Tippy
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
                </Tippy>

                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>

                    <Menu items={menuItems}>
                        <button>
                            <FontAwesomeIcon
                                className={cx('menu')}
                                icon={faEllipsisVertical}
                            />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
