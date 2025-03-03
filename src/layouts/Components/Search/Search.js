import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as services from '~/services/searchService';
import style from './Search.module.scss';
import { PopperWrapper } from '~/Components/Popper';
import { CloseIcon, SearchIcon } from '~/Components/Icons';
import { useDebounce } from '~/hooks';
import RenderAccountItem from './RenderAccountItem';

const cx = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [showLoading, setShowLoading] = useState(false);

    const inputRef = useRef();
    const debounceValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setShowLoading(true);
            const searchData = await services.search(debounceValue);
            setSearchResult(searchData);
            setShowLoading(false);
        };

        fetchApi();
    }, [debounceValue]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    const handleHideSearchResult = () => {
        setShowResult(false);
    };

    const handleChange = e => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) setSearchValue(searchValue);
    };

    return (
        // Using a wrapper <div> tag around the reference element
        // solves this by creating a new parentNode context.
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
                                {searchResult.length && (
                                    <RenderAccountItem
                                        accountList={searchResult}
                                    />
                                )}
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
                        onChange={handleChange}
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
                    <button
                        className={cx('search-btn')}
                        onMouseDown={e => e.preventDefault()}
                    >
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
