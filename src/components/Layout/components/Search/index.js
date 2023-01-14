import TippyHeadless from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/components/Icons';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [resultSearch, setResultSearch] = useState([]);
    const [isShow, setIsShow] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    // Handle hide result when blur outside
    const handleHideResult = () => {
        setIsShow(false);
    };

    // Handle when click cross icon clear
    const handleClickClear = (e) => {
        setSearchValue('');
        setResultSearch([]);
        inputRef.current.focus();
    };

    // Handle result search api
    useEffect(() => {
        if (!searchValue.trim()) {
            setResultSearch([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((response) => response.json())
            .then((response) => {
                setResultSearch(response.data);
                setLoading(false);
            })
            .catch((error) => {});
    }, [searchValue]);

    return (
        <TippyHeadless
            interactive
            visible={isShow && resultSearch.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Tài khoản</h4>
                        {resultSearch.map((result) => (
                            <AccountItem key={result.id} data={result} onClick={handleHideResult} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search-container')}>
                <input
                    ref={inputRef}
                    type="search"
                    value={searchValue}
                    className={cx('search-input')}
                    onChange={(e) => {
                        if (e.target.value.trim() === '') {
                            setSearchValue('');
                        } else {
                            setSearchValue(e.target.value);
                        }
                    }}
                    placeholder="Tìm kiếm tài khoản và video"
                    onFocus={() => setIsShow(true)}
                />

                {searchValue && !loading && (
                    <button className={cx('search-clear')} onClick={handleClickClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('search-loading')} icon={faSpinner} />}
                <span className={cx('search-spliter')} />

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
