import type { GetStaticProps} from 'next'
import { API_DEATILS } from '../typings'
 
const Home = () => {

  return (
    <div>
      <p>Home Page</p>
       
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async() =>{
  
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