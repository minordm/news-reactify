import styles from "./styles.module.css";

import { themeIcons } from '../../assets';
import { formatDate } from "../../helpers/formatData";
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const {isDark, toggleTheme} = useTheme()
  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS Reactify</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <img 
        src={isDark ? themeIcons.light : themeIcons.dark} 
        width={30} 
        alt="theme icon" 
        onClick={toggleTheme} 
      />
    </header>
  );
};

export default Header;
