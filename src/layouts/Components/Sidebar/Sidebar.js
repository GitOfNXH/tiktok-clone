import classNames from 'classnames/bind';

import config from '~/configs';
import { MenuItem } from './Menu';
import {
    HomeIcon,
    FollowingIcon,
    LiveIcon,
    HomeActiveIcon,
    FollowingActiveIcon,
    LiveActiveIcon,
} from '~/Components/Icons';
import Menu from './Menu';
import style from './Sidebar.module.scss';
import SuggestedAccounts from '~/Components/SuggestedAccounts';

const cx = classNames.bind(style);
const menuItems = [
    {
        to: config.routes.home,
        icon: HomeIcon,
        activeIcon: HomeActiveIcon,
        title: 'For You',
    },
    {
        to: config.routes.following,
        icon: FollowingIcon,
        activeIcon: FollowingActiveIcon,
        title: 'Following',
    },
    {
        to: config.routes.live,
        icon: LiveIcon,
        activeIcon: LiveActiveIcon,
        title: 'LIVE',
    },
];

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {menuItems.map((menuItem, index) => (
                    <MenuItem
                        key={index}
                        to={menuItem.to}
                        icon={<menuItem.icon />}
                        activeIcon={<menuItem.activeIcon />}
                        title={menuItem.title}
                    />
                ))}
            </Menu>

            <SuggestedAccounts label='Suggest accounts' expandable='see all' />

            <SuggestedAccounts
                label='Following accounts'
                expandable='see all'
            />
        </aside>
    );
}

export default Sidebar;
