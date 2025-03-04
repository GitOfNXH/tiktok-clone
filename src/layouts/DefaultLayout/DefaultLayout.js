import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './DefaultLayout.module.scss';
import Header from '~/layouts/Components/Header';
import Sidebar from '~/layouts/Components/Sidebar';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
