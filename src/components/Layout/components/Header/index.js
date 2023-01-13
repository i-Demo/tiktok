import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEllipsisVertical, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

import styles from './Header.module.scss';
import images from '~/assets/images';
import {
    Coins,
    Display,
    Help,
    Keyboard,
    Language,
    Live,
    Logout,
    Message,
    MessageBox,
    Profile,
    SearchIcon,
    Settings,
    UploadIcon,
} from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <Language />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <Help />,
        title: 'Phản hồi và Trợ giúp',
        to: '/feedback',
    },
    {
        icon: <Keyboard />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <Display />,
        title: 'Chế độ tối',
    },
];

const USER_MENU = [
    {
        icon: <Profile />,
        title: 'Xem hồ sơ',
        to: '/profile',
    },
    {
        icon: <Coins />,
        title: 'Nhận Xu',
        to: '/coin',
    },
    {
        icon: <Live />,
        title: 'LIVE Studio',
        to: '/studio',
    },
    {
        icon: <Settings />,
        title: 'Cài đặt',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <Logout />,
        title: 'Đăng xuất',
        to: 'logout',
        separate: true,
    },
];

function Header() {
    const [resultSearch, setResultSearch] = useState([]);
    const currentUser = true;

    // Handle change Menu
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log('Correct');
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setResultSearch([1]);
        }, 1);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </div>

                {/* Div Search */}
                <TippyHeadless
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
                            <SearchIcon />
                        </button>
                    </div>
                </TippyHeadless>

                {/* Right Header */}
                <div className={cx('right-header')}>
                    <div className={cx('wrapper')}>
                        {currentUser ? (
                            <>
                                <Button upload to="/upload" className={cx('header-upload')}>
                                    <FontAwesomeIcon className={cx('upload-icon')} icon={faPlus} />
                                    Tải lên
                                </Button>
                                <Tippy delay={[0, 0]} content="Tin nhắn" placement="bottom">
                                    <div className={cx('function')}>
                                        <Message />
                                    </div>
                                </Tippy>

                                <Tippy delay={[0, 0]} content="Hộp thư" placement="bottom">
                                    <div className={cx('function')}>
                                        <MessageBox />
                                    </div>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button upload to="/upload" className={cx('header-upload')}>
                                    <UploadIcon />
                                    Tải lên
                                </Button>
                                <Button className={cx('testt')} primary onClick={() => alert('Dang nhap')}>
                                    Đăng nhập
                                </Button>
                            </>
                        )}
                        <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                            {currentUser ? (
                                <Image
                                    className={cx('user-avatar')}
                                    alt="Nguyen Van A"
                                    src="hhttps://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b8c0fbbb4eaf6346f2e0da109a876b68~c5_100x100.jpeg?x-expires=1673704800&x-signature=vw2xVgdKO0P2IZzu3QtskGI2E3A%3D"
                                    fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                />
                            ) : (
                                <button className={cx('settings')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
