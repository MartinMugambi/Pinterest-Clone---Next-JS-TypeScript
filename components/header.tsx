import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import CommentIcon from '@material-ui/icons/Comment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import styles from 'styles/layout.module.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Post } from 'typings';
import {useState} from 'react';
import {useRouter} from 'next/router';
import useSWR from 'swr';
interface Props{
    data: Post[],
}

const Header = ({data}: Props) =>{

    const [text, setText] = useState('');

    const router = useRouter();
   
    const navigateToHome = () =>{
        router.push('/');
    }
   const searchText = (e: any) =>{
     setText(e.target.value);
   }

   const handleKeySearch = (e: any) =>{
      if(e.key === 'Enter'){
       console.log(data);   
      }
   }  
    return(
        <header className={styles.header}>
         <div className={styles.header__icons}>
           <PinterestIcon className={styles.header__logo} />
            <h4 onClick={navigateToHome} className={styles.header__text}>Home</h4> 
         </div>
          <div className={styles.header__search}>
           <SearchIcon />
               <input className={styles.header__input} type='text'  value={text} placeholder='Search' onChange={searchText} onKeyUp={handleKeySearch} />
          </div>
          <div className={styles.header__icon}>
              <NotificationsNoneIcon className={styles.header__icon_size} />
              <CommentIcon className={styles.header__icon_size}/>
              <AccountCircleIcon  className={styles.header__icon_size}/>
              <KeyboardArrowDownIcon   className={styles.header__icon_size}/>
          </div>
        </header>
    );
}

export default Header;