import styles from './NavBar.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const NavBar = () => {
    return <div className={styles.container}>
        <div className={styles.navContainer}>
            <div className={styles.returnButton}>
                <ArrowBackIcon/>
            </div>
        </div>
    </div>
}