import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { getSuggested } from '~/services/userService';

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
    const [suggested, setSuggested] = useState([]);
    const [isSeeAll, setIsSeeAll] = useState(false);

    useEffect(() => {
        try {
            const fetchApi = async () => {
                let data = [];
                data = isSeeAll
                    ? await getSuggested(1, 20)
                    : await getSuggested(1, 5);
                setSuggested(data);
            };
            fetchApi();
        } catch (error) {
            throw new Error(error);
        }
    }, [isSeeAll]);

    const handleViewChange = () => {
        setIsSeeAll(prevState => !prevState);
    };

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

            <SuggestedAccounts
                label='Suggest accounts'
                expandable={isSeeAll}
                onViewChange={handleViewChange}
                data={suggested}
            />
        </aside>
    );
}

export default Sidebar;
