import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Search from '~/layouts/components/Search';
import images from '~/assets/images';
import Image from '~/components/Image';
import config from '~/config';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

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
    Settings,
    UploadIcon,
} from '~/components/Icons';

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

    // const handleBackHome = () => {
    //     return true;
    // };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <Link to={config.routes.home}>
                        <img src={images.logo} alt="Tiktok"></img>
                    </Link>
                </div>

                {/* Search div */}
                <Search />

                {/* Right Header */}
                <div className={cx('right-header')}>
                    <div className={cx('right-wrapper')}>
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
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ff3ac26c0728a6e23061e814913bea69~c5_100x100.jpeg?x-expires=1674522000&x-signature=s4esdaUhwQzXn2IPXlQ%2B%2BXDUVpU%3D"
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
