import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloudDownloadIcon from '@material-ui/icons//CloudDownload';
import LinkIcon from '@material-ui/icons/Link';
import styles from 'styles/details.module.css';
import { GetStaticProps } from 'next';
import { API_DEATILS, Post } from 'typings';
import Header from 'components/header';
import PostList from 'components/post';

interface Props{
 datas: Post,
 data: Post[], 
}

const Details = ({datas, data}: Props) =>{
    return(
         <div>
           <Header data= {data} />
        <div className={styles.details}>
         <div className={styles.details__card}>
           <div>
                <img  className={styles.details__img} src={datas.urls.regular} alt= 'post'  />
           </div>

           <div>
              <div className={styles.details__row}>
              <div className={styles.details__icon}>
              <MoreHorizIcon />
             <CloudDownloadIcon />
             <LinkIcon />
              </div>
             <div>
               <button className={styles.btn}>Save</button>
             </div>
              </div>
              <div className={styles.details_description} >
                <h4 style={{fontSize: '1.5rem'}}>{(datas?.location.name || datas?.location.title) ?? 'Pinterest Photo'}</h4>
                 <p>{datas?.description ?? 'No description Found'}</p>
                 <h3>Comment</h3>
              </div>
           </div>
           
         </div>
        </div>
       
        </div>
    );
}


export  async function getStaticPaths(){
  const ACCESS_KEY = process.env.ACCESS_KEY;
  const url = `${API_DEATILS.baseUrl}${ACCESS_KEY}`;

    const response = await fetch(url);

    const datas = await response.json();

  const paths = datas.map((items: Post) =>({
       params: {
         id: items.id,
       }
  }));

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps:GetStaticProps= async (context: any) =>{
  const {params} = context;
  const ACCESS_KEY = process.env.ACCESS_KEY;
  const url = `https://api.unsplash.com/photos/${params.id}?client_id=${ACCESS_KEY}`;
  const response = await fetch(url);
  const datas =  await response.json();
  console.log(datas);
 console.log(url);
  if(!datas){
    return{
      notFound: true,
    }
    
  }
    
  return {
     props: {
       datas,
     },
     revalidate: 30,
  }
}

export default Details;