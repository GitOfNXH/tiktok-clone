import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { MenuItem } from './Menu';
import Menu from './Menu';
import style from './Sidebar.module.scss';
import SuggestedAccounts from '~/Components/SuggestedAccounts';
import { getSuggested } from '~/services/userService';
import { getFollowings } from '~/services/followService';
import { getCurrentUser, menuItems } from '~/constants';

const cx = classNames.bind(style);

function Sidebar() {
    const [suggested, setSuggested] = useState([]);
    const [isSeeAll, setIsSeeAll] = useState(false);
    const [isSeeMore, setIsSeeMore] = useState(false);
    const [followings, setFollowings] = useState([]);

    const currentUser = getCurrentUser();

    useEffect(() => {
        const fetchApi = async () => {
            let data = [];
            data = isSeeAll
                ? await getSuggested(1, 20)
                : await getSuggested(1, 5);
            setSuggested(data);
        };
        fetchApi();
    }, [isSeeAll]);

    useEffect(() => {
        if (currentUser.id) {
            const fetchApi = async () => {
                let data = [];
                if (!isSeeMore) {
                    data = await getFollowings(1);
                    setFollowings(data);
                } else if (isSeeMore) {
                    data = await getFollowings(2);
                    setFollowings(prev => prev.concat(data));
                }
            };
            fetchApi();
        }
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

                {currentUser.followings_count && (
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
