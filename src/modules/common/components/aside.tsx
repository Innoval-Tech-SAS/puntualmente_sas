import styles from "../assets/css/aside.module.css";
import { DefaultAsideProps } from "../types/navbarTypes";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

interface AsideProps extends DefaultAsideProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenModal: () => void;
}

const DefaultAside: React.FC<AsideProps> = ({
  navItems,
  navButtons,
  isOpen,
  onClose,
  onOpenModal
}) => {
  return (
    <aside className={`${styles.aside} ${isOpen ? styles.open : ''}`}>
      <div className={styles.asideHeader}>
        <button className={styles.closeButton} onClick={onClose}>
          <IoMdClose size={24} />
        </button>
      </div>
      <div className={styles.asideContent}>
        <ul className={styles.asideList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.asideItem}>
              <Link 
                to={item.url} 
                className={styles.asideLink}
                onClick={onClose}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.buttonGroup}>
        {navButtons.map((button, index) => (
          button.type === "button" ? (
            <button 
              onClick={() => {
                onClose();
                onOpenModal();
              }} 
              className={styles.asideButton} 
              key={index}
            >
              {button.title}
            </button>
          ) : (
            <Link 
              key={index} 
              to={button.url} 
              className={styles.asideButton}
              onClick={onClose}
            >
              {button.title}
            </Link>
          )
        ))}
      </div>
    </aside>
  );
};

export default DefaultAside;