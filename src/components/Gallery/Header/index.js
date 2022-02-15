import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { Container, IconsHeader } from './styles';

export const GalleryHeader = () => {
  const [estados, setEstados] = useState([]);

  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {

    const req = async () => {
      let config = {
        method: 'post',
        url: 'https://us-east-1.aws.data.mongodb-api.com/app/application-0-fkaiw/endpoint/get_smartsite?slug=' + slug,
        headers: {}
      };
      const { data } = await axios(config)

      setEstados(data)

      console.log(data)
    }

    req()

  }, slug)

  return <Container>

    {estados.map((estado) =>
      <>
        <img className='profile-photo' src={estado.logo} />

        <IconsHeader>
          <a key={estado.link_facebook}>
            <img src="/img/icons/facebook-icon.jpg" />
          </a>
          <a key={estado.link_twitter}>
            <img src="/img/icons/twitter-icon.jpg" />
          </a>
          <a key={estado.link_discord}>
            <img src="/img/icons/discord-icon.jpg" />
          </a>
          <a key={estado.link_pinterest}>
            <img src="/img/icons/pinterest-icon.jpg" />
          </a>
          <a key={estado.link_yt}>
            <img src="/img/icons/youtube-icon.jpg" />
          </a>
          <a key={estado.link_telegram}>
            <img src="/img/icons/telegram-icon.jpg" />
          </a>
        </IconsHeader>
      </>
    )}

    <hr />

  </Container>;
}
