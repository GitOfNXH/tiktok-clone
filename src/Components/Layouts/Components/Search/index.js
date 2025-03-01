import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import style from './Search.module.scss';
import { PopperWrapper } from '~/Components/Popper';
import AccountItem from '~/Components/AccountItem';
import { CloseIcon, SearchIcon } from '~/Components/Icons';

const cx = classNames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([
                {
                    id: 1,
                    src: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/118441977edc639baf728fd892d500b3~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&nonce=5022&refresh_token=f5508ef7ae856ca5b9f252377ea3170e&x-expires=1740898800&x-signature=Sq0ZUXDX8BbnvrnxtGDxLggVdkw%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474',
                    name: 'Đào Lê Phương Hoa',
                    userName: 'hoaa.hanassii',
                },
                {
                    id: 2,
                    src: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/118441977edc639baf728fd892d500b3~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&nonce=5022&refresh_token=f5508ef7ae856ca5b9f252377ea3170e&x-expires=1740898800&x-signature=Sq0ZUXDX8BbnvrnxtGDxLggVdkw%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474',
                    name: 'Đào Lê Phương Hoa',
                    userName: 'hoaa.hanassii',
                },
                {
                    id: 3,
                    src: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/118441977edc639baf728fd892d500b3~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&nonce=5022&refresh_token=f5508ef7ae856ca5b9f252377ea3170e&x-expires=1740898800&x-signature=Sq0ZUXDX8BbnvrnxtGDxLggVdkw%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474',
                    name: 'Đào Lê Phương Hoa',
                    userName: 'hoaa.hanassii',
                },
                {
                    id: 4,
                    src: 'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/118441977edc639baf728fd892d500b3~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&nonce=5022&refresh_token=f5508ef7ae856ca5b9f252377ea3170e&x-expires=1740898800&x-signature=Sq0ZUXDX8BbnvrnxtGDxLggVdkw%3D&idc=my&ps=13740610&shcp=81f88b70&shp=a5d48078&t=4d5b0474',
                    name: 'Đào Lê Phương Hoa',
                    userName: 'hoaa.hanassii',
                },
            ]);
        }, 0);
    }, []);

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
                                {searchResult.map(accountItem => (
                                    <li key={accountItem.id}>
                                        <AccountItem
                                            src={accountItem.src}
                                            name={accountItem.name}
                                            userName={accountItem.userName}
                                        />
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

                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                    <button className={cx('clear')} onClick={handleClear}>
                        <CloseIcon />
                    </button>
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
