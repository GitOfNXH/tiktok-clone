import classNames from 'classnames/bind';

import style from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(style);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Tiktok' />
                </div>
                <div className={cx('search')}>
                    <input
                        placeholder='Search accounts and video'
                        spellCheck={false}
                    />
                    <button className={cx('clear')}>
                        <img src={images.clear} alt='' />
                    </button>
                    <button className={cx('loading')}>
                        <img src={images.spinner} alt='' />
                    </button>
                    <button className={cx('search-btn')}>
                        <img src={images.search} alt='' />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
