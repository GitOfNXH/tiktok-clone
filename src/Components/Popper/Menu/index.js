import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { PopperWrapper } from '~/Components/Popper';
import style from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(style);

const defaultFn = () => {};

function Menu({ children, items = [], onchange = defaultFn }) {
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

    return (
        <Tippy
            interactive
            offset={[12, 15]}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
            delay={[0, 700]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-items')} tabIndex='-1' {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                onBack={() => {
                                    setHistory(prev =>
                                        prev.slice(0, history.length - 1)
                                    );
                                }}
                                title='Language'
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
