import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(style);

function SuggestedAccounts({
    label,
    following,
    expandable,
    onViewChange,
    data = [],
}) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((account, index) => (
                <AccountItem following={following} key={index} data={account} />
            ))}

            <p className={cx('expandable')} onClick={onViewChange}>
                {following
                    ? expandable
                        ? 'see less'
                        : 'see more'
                    : expandable
                    ? 'see less'
                    : 'see all'}
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    expandable: PropTypes.bool.isRequired,
    following: PropTypes.bool,
    data: PropTypes.array,
};

export default SuggestedAccounts;
