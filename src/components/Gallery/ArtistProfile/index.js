import React from 'react';
import { ArtisteProfile, Container, ProfileIcons, ProfileInformations, ProfileLinkedinIcon, ProfileSocialNetworks } from './styles'

export const GalleryArtistProfile = () => {
  return <Container>

    <img src="/img/gallery-floriano/assinatura-e-caricatura.jpg" />

    <ProfileInformations>

      <h1>Floriano</h1>

      <ProfileSocialNetworks>

        <ProfileLinkedinIcon>
          <a className="profile-social-networks_linkedin">
            <img src="/img/icons/linkedin-icon.png" />
          </a>
        </ProfileLinkedinIcon>

        <ProfileIcons>
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

        </ProfileIcons>

      </ProfileSocialNetworks>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.</p>

    </ProfileInformations>

  </Container>;
}
