import style from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('container')}>Side bar</div>
        </aside>
    );
}

export default Sidebar;
