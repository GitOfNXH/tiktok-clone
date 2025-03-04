import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './Menu.module.scss';

const cx = classNames.bind(style);

function Menu({ children }) {
    return <div className={cx('menu-items')}>{children}</div>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Menu;
