import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/85e4fb33db3553c110d78f98d1e65772.jpeg?lk3s=a5d48078&nonce=44977&refresh_token=29b5ed7fefcd5bfe58662b0eb431ff92&x-expires=1722517200&x-signature=fzLP7QjopYOOP18Op%2Bd4fsVpRL0%3D&shp=a5d48078&shcp=81f88b70"
                alt="Img Default"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>i_am_young22</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>냥뇽녕냥👻</span>
            </div>
        </div>
    );
}

export default AccountItem;
