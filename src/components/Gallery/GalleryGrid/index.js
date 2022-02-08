import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

import { GalleryImage } from './styles';

export const GalleryGrid = () => {
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    const req = async () => {
      var config = {
        method: 'post',
        url: 'https://us-east-1.aws.data.mongodb-api.com/app/application-0-fkaiw/endpoint/get_gallery?gallery_id=floriano-2',
        headers: {}
      };
      const { data } = await axios(config)

      setEstados(data)

      console.log(data)
    }

    req()

  }, [])

  return (
    <GalleryImage >

      {estados.map((estado) =>
        <a key={estado.link}>
          <img src={estado.img_url} />
        </a>
      )}

    </GalleryImage>
  )
}
