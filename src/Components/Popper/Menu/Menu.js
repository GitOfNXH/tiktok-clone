import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { PopperWrapper } from '~/Components/Popper';
import style from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(style);

const defaultFn = () => {};

function Menu({
    children,
    items = [],
    hideOnClick = 'false',
    onchange = defaultFn,
}) {
    const [history, setHistory] = useState([{ data: items }]);

    const currentLevel = history[history.length - 1];

    const renderItems = () => {
        return currentLevel.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent)
                            setHistory(prev => [...prev, item.children]);
                        else onchange(item);
                    }}
                />
            );
        });
    };

    const resetToFirstMenu = () => {
        setHistory(prev => prev.slice(0, history.length - 1));
    };

    return (
        <Tippy
            interactive
            offset={[12, 15]}
            hideOnClick={hideOnClick}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
            delay={[0, 700]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-items')} tabIndex='-1' {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                onBack={resetToFirstMenu}
                                title='Language'
                            />
                        )}
                        <div className={cx('menu-list')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
