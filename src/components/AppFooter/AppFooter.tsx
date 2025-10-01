import styles from "./AppFooter.module.css";
import { footerRoutes } from "./utils/footerRoutes";
import { footerSocialLinks } from "./utils/footerSocialLinks";

const AppFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>🛍️ ShopHub</h3>
            <p className={styles.tagline}>
              Your one-stop destination for quality products
            </p>
          </div>

          <div className={styles.links}>
            {footerRoutes.map((footerRoutItem) => (
              <div className={styles.linkGroup} key={footerRoutItem.id}>
                <h4 className={styles.linkTitle}>
                  {footerRoutItem.groupLinkTitle}
                </h4>
                {/* links */}
                <ul className={styles.linkList}>
                  {footerRoutItem.groupLinks.map((linkItem) => (
                    <li key={linkItem.id}>
                      <a href={linkItem.href} className={styles.link}>
                        {linkItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} ShopHub. All rights reserved.
          </p>
          <div className={styles.social}>
            {footerSocialLinks.map((socialItem) => (
              <a
                href={socialItem.href}
                className={styles.socialLink}
                aria-label={socialItem.ariaLabel}
                key={socialItem.id}
              >
                {socialItem.socialLabel}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
