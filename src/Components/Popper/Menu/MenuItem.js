import Button from '~/Components/Button';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(style);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button
            to={data.to}
            leftIcon={data.icon}
            className={classes}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
