import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as apiService from '~/apiServices/searchService';
import style from './Search.module.scss';
import { PopperWrapper } from '~/Components/Popper';
import AccountItem from '~/Components/AccountItem';
import { CloseIcon, SearchIcon } from '~/Components/Icons';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [showLoading, setShowLoading] = useState(false);

    const inputRef = useRef();
    const debounce = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setShowLoading(true);
            const searchData = await apiService.search(debounce);
            setSearchResult(searchData);
            setShowLoading(false);
        };

        fetchApi();
    }, [debounce]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    const handleHideSearchResult = () => {
        setShowResult(false);
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                onClickOutside={handleHideSearchResult}
                offset={[0, 8]}
                visible={showResult && searchResult.length > 0}
                render={attrs => (
                    <div
                        className={cx('search-result')}
                        tabIndex='-1'
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <ul className={cx('result-list')}>
                                {searchResult.length &&
                                    searchResult.map(accountItem => (
                                        <li key={accountItem.id}>
                                            <AccountItem data={accountItem} />
                                        </li>
                                    ))}
                            </ul>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        value={searchValue}
                        ref={inputRef}
                        onFocus={() => setShowResult(true)}
                        placeholder='Search accounts and video'
                        spellCheck={false}
                        onChange={e => setSearchValue(e.target.value)}
                    />

                    {showLoading && (
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                    )}
                    {searchValue && !showLoading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <CloseIcon />
                        </button>
                    )}
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
