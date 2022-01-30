import Header from 'components/header'
import PostList from 'components/post'
import { API_DEATILS, Post } from '../typings'
export interface Props{
  data: Post[],
  
}
const Home = ({data}: Props) => {

  return (
    <div>
      <Header data= {data} />
     <PostList data={data} />
    </div>
  )
}

export default Home;

export const getServerSideProps = async() =>{
  
  const ACCESS_KEY =  process.env.ACCESS_KEY;
  const url = `${API_DEATILS.baseUrl}${ACCESS_KEY}`;
  
  const response =  await fetch(url);
  const data = await response.json();
  console.log(data.length);
  return {
    props: {
      data
    }
  }
}