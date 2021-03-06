import React from 'react';

// import { ArtisteProfile, Container, ProfileIcons, ProfileInformations, ProfileLinkedinIcon, ProfileSocialNetworks } from './styles'

import { Container } from './styles';

import { GalleryHeader } from '../Header';
import { GalleryGridImages } from '../Grid';
import { GalleryArtistProfile } from '../ArtistProfile';
import { GalleryFooter } from '../Footer';

export const GalleryPage = () => {

  return <Container >

    <GalleryHeader />

    <GalleryGridImages />

    <GalleryArtistProfile />

    <GalleryFooter />

  </Container>

}
