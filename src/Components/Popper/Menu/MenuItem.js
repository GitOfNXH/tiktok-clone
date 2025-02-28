import Button from '~/Components/Button';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ data }) {
    return (
        <Button to={data.to} leftIcon={data.icon} className={cx('menu-item')}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
