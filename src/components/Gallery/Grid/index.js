import React from 'react';
import { GalleryGrid } from '../GalleryGrid'

import { Container } from './styles';

export const GalleryGridImages = ({estado}) => {
  return <Container>

    <h1>NFT COLLECTION</h1>

    <GalleryGrid estado={estado} />

  </ Container>;
}
