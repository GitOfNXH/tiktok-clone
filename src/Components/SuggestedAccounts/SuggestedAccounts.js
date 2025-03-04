import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(style);

function SuggestedAccounts({ label, expandable }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('expandable')}>{expandable}</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    expandable: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
