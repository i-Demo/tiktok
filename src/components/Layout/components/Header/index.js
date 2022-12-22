import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEllipsisVertical,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Header() {
    const [resultSearch, setResultSearch] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setResultSearch([1]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </div>

                {/* Div Search */}
                <Tippy
                    interactive
                    visible={resultSearch.length > 0}
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
                >
                    <div className={cx('search-container')}>
                        <input type="search" className={cx('search-input')} placeholder="Tìm kiếm tài khoản và video" />

                        <button className={cx('search-clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('search-loading')} icon={faSpinner} />

                        <span className={cx('search-spliter')} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                {/* Right Header */}
                <div className={cx('right-header')}>
                    <button className={cx('upload-btn')}>
                        <FontAwesomeIcon className={cx('upload-icon')} icon={faPlus} />
                        Tải lên
                    </button>
                    <button className={cx('login-btn')}>Đăng nhập</button>
                    <FontAwesomeIcon className={cx('settings')} icon={faEllipsisVertical} />
                </div>
            </div>
        </header>
    );
}

export default Header;
