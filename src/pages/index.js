import Link from 'next/link'


import { GalleryPage } from '../components/Gallery/GalleryPage';

import { Container } from '../styles/gallery';

const Gallery = () => {
  return (
    <Container>  
         <GalleryPage /> 
    </Container>
  )
}

export default Gallery;