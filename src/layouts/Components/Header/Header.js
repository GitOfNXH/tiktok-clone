import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link, useNavigate } from 'react-router-dom';

import { headerMenuUser, headerMenuItems } from '~/constants';
import config from '~/configs';
import style from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/Components/Button';
import Menu from '~/Components/Popper/Menu';
import { ActivityIcon, MessagesIcon, UploadIcon } from '~/Components/Icons';
import Image from '~/Components/Image';
import Search from '../Search';
import { getCurrentUser } from '~/constants';

const cx = classNames.bind(style);
function Header() {
    const navigate = useNavigate();

    const currentUser = getCurrentUser();

    const handleChangeItem = item => {
        switch (item.type) {
            case 'language':
                console.log('Xu ly thay doi ngon ngu');
                break;
            case 'logout':
                localStorage.setItem('token', '');
                localStorage.setItem('userData', '{}');
                navigate('/');
                break;
            default:
                return;
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
                    {currentUser.id ? (
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
                        items={
                            currentUser.id ? headerMenuUser : headerMenuItems
                        }
                        onchange={handleChangeItem}
                    >
                        {currentUser.id ? (
                            <Image
                                className={cx('user-avatar')}
                                width='32px'
                                height='32px'
                                rounded
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
