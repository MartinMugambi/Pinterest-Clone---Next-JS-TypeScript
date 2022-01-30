import { Post } from "typings";
import styles from 'styles/post.module.css';
import Link from "next/link";
import Image from "next/image";
export interface Props{
    data: Post[];
} 

const PostList = ({data}: Props) =>{
    return(
        <div className={styles.post}>
        {data.map(item =>(
          
           <Link key={item.id} href={`/posts/${item.id}`}>
              <Image src={item.urls.regular} alt='images' width={item.width} height={item.height} />
           </Link>
        ))}
       </div>
    );
}

export default PostList;