import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './Menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ to, icon, activeIcon, title }) {
    return (
        <NavLink
            className={nav => cx('menu-item', { active: nav.isActive })}
            to={to}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('activeIcon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default MenuItem;
