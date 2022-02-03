import Link from 'next/link'
import { GalleryArtistProfile } from '../components/Gallery/ArtistProfile';
import { GalleryFooter } from '../components/Gallery/Footer';
import { GalleryGridImages } from '../components/Gallery/Grid';
import { GalleryHeader } from '../components/Gallery/Header';

import { Container } from '../styles/gallery';

const Gallery = () => {
  return (
    <Container>
      <GalleryHeader />

      <GalleryGridImages />

      <GalleryArtistProfile />

      <Link href="/">
        VOLTAR
      </Link>

      <GalleryFooter />
    </Container>
  )
}

export default Gallery;