import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import { PopperWrapper } from '../Popper';
import style from './SuggestedAccounts.module.scss';
import Image from '../Image';
import PreviewAccount from './PreviewAccount/PreviewAccount';

const cx = classNames.bind(style);

function AccountItem({ data, following }) {
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
                            <PreviewAccount following={following} data={data} />
                        </PopperWrapper>
                    </div>
                )}
            >
                <a href={`/@${data.nickname}`} className={cx('account-item')}>
                    <Image
                        width='32px'
                        height='32px'
                        rounded
                        alt={data.nickname}
                        src={data.avatar}
                    />
                    <div className={cx('info')}>
                        <h4 className={cx('username')}>
                            <span>{data.nickname ?? ''}</span>
                            {data.tick && (
                                <FontAwesomeIcon
                                    className={cx('check')}
                                    icon={faCheckCircle}
                                />
                            )}
                        </h4>
                        <p className={cx('name')}>
                            {`${data.first_name} ${data.last_name}`.trim() ||
                                'no fullname'}
                        </p>
                    </div>
                </a>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    following: PropTypes.bool,
};

export default AccountItem;
