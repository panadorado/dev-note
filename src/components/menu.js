import React from 'react';
import menuStyles from './menu.module.scss';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faInfoCircle } from '@fortawesome/free-solid-svg-icons';



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
                <span>
                  <FontAwesomeIcon icon={faAddressCard} style={{ paddingRight: "5px"}} size={`1x`} />
                </span>
                Cá nhân
              </li>
            </Link>
            <Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to="/gioi-thieu">
              <li className=''>
                <span>
                  <FontAwesomeIcon icon={faInfoCircle} style={{ paddingRight: "5px"}} size={`1x`} />
                </span>
                Giới thiệu
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  )
}