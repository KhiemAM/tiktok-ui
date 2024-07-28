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
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/85e4fb33db3553c110d78f98d1e65772~c5_300x300.webp?lk3s=a5d48078&nonce=66374&refresh_token=0542885e373e4049ed1c03cdb7bd07e9&x-expires=1722247200&x-signature=8ycA131NTcZTJwpIAfdp8qJhgNE%3D&shp=a5d48078&shcp=c1333099"
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
