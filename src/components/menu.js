import React from 'react';
import menuStyles from './menu.module.scss';
import { Link } from 'gatsby';

export default (props) => {
  const { title } = props;

  return (

    <header className={menuStyles.header}>
      <div className={menuStyles.dTitle}>
        <Link className={menuStyles.title} to="/">
          {title}
        </Link>
      </div>
      <nav className={menuStyles.dMenu}>
        <ul className={menuStyles.navList}>
          <li>
            <Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to="/">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to="/ca-nhan">
              Cá nhân
            </Link>
          </li>
          <li>
            <Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to="/gioi-thieu">
              Giới thiệu
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}