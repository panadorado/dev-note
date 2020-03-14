import React from 'react';
import menuStyles from './menu.module.scss';
import { Link } from 'gatsby';




export default (props) => {
  const { title } = props;

  return (
    <div className={menuStyles.controlHeader}>
      <header className={menuStyles.header}>
        <div className={menuStyles.dTitle}>
          <Link className={menuStyles.title} to="/">
            {title}
          </Link>
        </div>
        <nav className={menuStyles.dMenu}>
          <ul className={menuStyles.navList}>
            <Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to="/">
              <li className=''>
                Trang chủ
              </li>
            </Link>
            <Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to="/ca-nhan">
              <li className=''>
                Cá nhân
              </li>
            </Link>
            <Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to="/gioi-thieu">
              <li className=''>
                Giới thiệu
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  )
}