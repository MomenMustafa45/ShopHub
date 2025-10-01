import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./AppHeader.module.css";
import { headerRoutes } from "./utils/headerRoutes";

const AppHeader: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link to="/" className={styles.logo}>
            🛍️ ShopHub
          </Link>

          <ul className={styles.navList}>
            {headerRoutes.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.href}
                  className={`${styles.navLink} ${
                    isActive(item.href) ? styles.active : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
