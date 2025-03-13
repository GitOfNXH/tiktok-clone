import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

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
import { getSuggested } from '~/services/userService';
import { getFollowings } from '~/services/followService';
import { getCurrentUser } from '~/constants';

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
    const [isSeeMore, setIsSeeMore] = useState(false);
    const [followings, setFollowings] = useState([]);

    const currentUser = getCurrentUser();

    useEffect(() => {
        const fetchApi = async () => {
            try {
                let data = [];
                data = isSeeAll
                    ? await getSuggested(1, 20)
                    : await getSuggested(1, 5);
                setSuggested(data);
            } catch (error) {
                throw new Error(error);
            }
        };
        fetchApi();
    }, [isSeeAll]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                let data = [];
                if (currentUser.id && !isSeeMore) {
                    data = await getFollowings(1);
                    setFollowings(data);
                } else if (currentUser.id && isSeeMore) {
                    data = await getFollowings(2);
                    setFollowings(prev => prev.concat(data));
                }
            } catch (error) {
                throw new Error(error);
            }
        };
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSeeMore]);

    const handleSeeAll = () => {
        setIsSeeAll(prevState => !prevState);
    };

    const handleSeeMore = () => {
        setIsSeeMore(prevState => !prevState);
    };

    return (
        <aside className={cx('wrapper')}>
            <div className='container'>
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
                    onViewChange={handleSeeAll}
                    data={suggested}
                />

                {currentUser.id && (
                    <SuggestedAccounts
                        label='Following accounts'
                        following
                        expandable={isSeeMore}
                        onViewChange={handleSeeMore}
                        data={followings}
                    />
                )}
            </div>
        </aside>
    );
}

export default Sidebar;
