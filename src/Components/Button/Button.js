import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './Button.module.scss';

const cx = classNames.bind(style);

function Button({
    to,
    href,
    children,
    primary,
    secondary,
    outline,
    text,
    rounded,
    disable,
    small,
    large,
    leftIcon,
    rightIcon,
    onClick,
    className,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (disable) {
        for (const key in props) {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        }
    }

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        props.href = href;
        console.log(Comp);

        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        secondary,
        outline,
        text,
        rounded,
        disable,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    disable: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Button;
