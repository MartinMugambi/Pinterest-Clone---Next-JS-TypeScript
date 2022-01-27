import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import CommentIcon from '@material-ui/icons/Comment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import styles from 'styles/layout.module.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const Header = () =>{
    return(
        <header className={styles.header}>
         <div className={styles.header__icon}>
           <PinterestIcon className={styles.header__logo} />
            <h4 className={styles.header__text}>Home</h4> 
         </div>
          <div className={styles.header__search}>
           <SearchIcon />
               <input className={styles.header__input} type='text' placeholder='Search' />
          </div>
          <div className={styles.header__icon}>
              <NotificationsNoneIcon className={styles.header__icon_size} />
              <CommentIcon className={styles.header__icon_size}/>
              <AccountCircleIcon  className={styles.header__icon_size}/>
              <KeyboardArrowDownIcon  className={styles.header__icon_size}/>
          </div>
        </header>
    );
}

export default Header;