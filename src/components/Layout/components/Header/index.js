import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEllipsisVertical,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';

console.log(images);
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </div>

                {/* Div Search */}
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
