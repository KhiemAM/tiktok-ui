import classNames from 'classnames/bind';

import Button from '~/component/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, ocClick }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={ocClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
