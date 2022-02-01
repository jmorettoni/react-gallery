import React from 'react';

import { Container, IconsHeader } from './styles';

export const GalleryHeader = () => {
  return <Container>

    <img className='profile-photo' src="/img/gallery-floriano/assinatura-vetorizada.png" />

    <IconsHeader>
      <a>
        <img src="/img/icons/facebook-icon.jpg" />
      </a>
      <a>
        <img src="/img/icons/twitter-icon.jpg" />
      </a>
      <a>
        <img src="/img/icons/discord-icon.jpg" />
      </a>
      <a>
        <img src="/img/icons/pinterest-icon.jpg" />
      </a>
      <a>
        <img src="/img/icons/youtube-icon.jpg" />
      </a>
      <a>
        <img src="/img/icons/telegram-icon.jpg" />
      </a>
    </IconsHeader>

    <hr />


  </Container>;
}
