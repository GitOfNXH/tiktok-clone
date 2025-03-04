import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { PopperWrapper } from '../Popper';

import style from './SuggestedAccounts.module.scss';
import Image from '../Image';
import PreviewAccount from './PreviewAccount/PreviewAccount';

const cx = classNames.bind(style);

function AccountItem() {
    return (
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-16, 0]}
                placement='bottom-start'
                render={attrs => (
                    <div className={cx('preview')} tabIndex='-1' {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            <PreviewAccount />
                        </PopperWrapper>
                    </div>
                )}
            >
                <Link to='/@hoaa.hanassii' className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        alt=''
                        src='data:image/jpeg;base64,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'
                    />
                    <div className={cx('info')}>
                        <h4 className={cx('username')}>
                            <span>hoaa.hanassii</span>
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCheckCircle}
                            />
                        </h4>
                        <p className={cx('name')}>Đào Lê Phương Hoa</p>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

export default AccountItem;
