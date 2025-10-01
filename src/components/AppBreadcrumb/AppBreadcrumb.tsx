import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.css";
import type { RouteLink } from "../../types/routeLink";

type AppBreadcrumbProps = {
  breadcrumbCurrent?: string;
  breadcrumbLinks: RouteLink[];
};

const AppBreadcrumb: React.FC<AppBreadcrumbProps> = ({
  breadcrumbCurrent,
  breadcrumbLinks,
}) => {
  return (
    <nav className={styles.breadcrumb}>
      <div className="container">
        {breadcrumbLinks.map((routeLink, index) => {
          const showSlash =
            index === breadcrumbLinks.length - 1 && !breadcrumbCurrent;
          return (
            <>
              <Link
                key={routeLink.id}
                to={routeLink.href}
                className={styles.breadcrumbLink}
              >
                {routeLink.label}
              </Link>
              {!showSlash && (
                <span className={styles.breadcrumbSeparator}>/</span>
              )}
            </>
          );
        })}

        {breadcrumbCurrent && (
          <span className={styles.breadcrumbCurrent}>{breadcrumbCurrent}</span>
        )}
      </div>
    </nav>
  );
};

export default AppBreadcrumb;
