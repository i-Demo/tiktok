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
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    // Handle hide result when blur outside
    const handleHideResult = () => {
        setShowResult(false);
    };

    // Handle when click cross icon clear
    const handleClickClear = (e) => {
        setSearchValue('');
        setResultSearch([]);
        inputRef.current.focus();
    };

    // Handle result search api
    useEffect(() => {
        setTimeout(() => {
            setResultSearch([1]);
        }, 1);
    }, []);
    return (
        <TippyHeadless
            interactive
            visible={showResult && resultSearch.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Tài khoản</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
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
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Tìm kiếm tài khoản và video"
                    onFocus={() => setShowResult(true)}
                />

                {searchValue && (
                    <button className={cx('search-clear')} onClick={handleClickClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                <FontAwesomeIcon className={cx('search-loading')} icon={faSpinner} />

                <span className={cx('search-spliter')} />

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
