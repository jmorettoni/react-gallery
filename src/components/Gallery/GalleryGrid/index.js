import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

import { GalleryImage } from './styles';
 
import { useRouter } from 'next/router'
 
export const GalleryGrid = () => {
 
  const [estados, setEstados] = useState([]);

  const router = useRouter()
  const { slug } = router.query
 
  useEffect(() => {

    const req = async () => {
      let config = {
        method: 'post',
        url: 'https://us-east-1.aws.data.mongodb-api.com/app/application-0-fkaiw/endpoint/get_gallery?slug='+slug ,
        headers: {}
      };
      const { data } = await axios(config)

      setEstados(data)

      console.log(data)
    }

    req()

  }, slug )

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
