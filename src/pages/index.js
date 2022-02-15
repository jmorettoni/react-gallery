import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import axios from 'axios';

import { GalleryPage } from '../components/Gallery/GalleryPage';
import { Container } from '../styles/gallery';
import { GalleryItem } from '../components/Gallery/GalleryItem';
import { Content, StyledPageCreator, StyledPageFloriano, StyledPageMars } from '../styles/global';


export const Home = () => {
  const [estados, setEstados] = useState([]);

  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {

    const req = async () => {
      let config = {
        method: 'post',
        url: 'https://us-east-1.aws.data.mongodb-api.com/app/application-0-fkaiw/endpoint/get_smartsite',
        headers: {}
      };
      const { data } = await axios(config)

      setEstados(data)

      console.log(data)
    }

    req()

  }, slug)  
50
  return <Container>

    {estados.map((estados) =>
      <Content>
        <div>
          <GalleryItem estados={estados} />
        </div>
      </Content>
    )}

  </Container>
}

export default Home;