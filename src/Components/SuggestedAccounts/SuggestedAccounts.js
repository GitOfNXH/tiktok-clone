import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(style);

function SuggestedAccounts({ label, expandable, onViewChange, data = [] }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map(account => (
                <AccountItem key={account.id} data={account} />
            ))}

            <p className={cx('expandable')} onClick={onViewChange}>
                {expandable ? 'see less' : 'see all'}
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    expandable: PropTypes.bool.isRequired,
    data: PropTypes.array,
};

export default SuggestedAccounts;
