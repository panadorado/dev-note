import React from 'react';
import menuStyles from './menu.module.scss';
import { Link } from 'gatsby';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faEnvelope, fas } from '@fortawesome/free-solid-svg-icons';



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
          <Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to="/">
            <li>
              Trang chủ
            </li>
          </Link>
          <Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to="/ca-nhan">
            <li>
              Cá nhân
            </li>
          </Link>
          <Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to="/gioi-thieu">
            <li>
              Giới thiệu
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}