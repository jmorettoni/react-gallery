 
import { GalleryPage } from '../components/Gallery/GalleryPage';

import { Container } from '../styles/gallery';


import { useRouter } from 'next/router'

import Link from 'next/link'


const Home = () => {

 

  return (
    <Container>  
          <p> 
          <Link href="/gallery/floriano">
                  <a style={{color:"#fff"}} >Floriano</a>
          </Link>
          </p>
          <p> 
          <Link href="/gallery/creator">
                  <a style={{color:"#fff"}}>Creator</a>
          </Link>
          </p>
          <p> 
          <Link href="/gallery/mars">
                  <a style={{color:"#fff"}} >Mars</a>
          </Link>
          </p>
    </Container>
  )
}

export default Home;