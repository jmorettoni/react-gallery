import React from 'react';
import { GalleryImage } from './styles';


const imgsGallery = [
  {
    img: '/img/gallery-floriano/praia-de-itaipu.png',
    link: "https://musicpro.live/#1"
  },
  {
    img: '/img/gallery-floriano/jovelina-perola-negra.png',
    link: "https://musicpro.live/#2"
  },
  {
    img: '/img/gallery-floriano/toca-da-gamba.png',
    link: "https://musicpro.live/#3"
  },
  {
    img: '/img/gallery-floriano/jovelina-perola-negra.png',
    link: "https://musicpro.live/#4"
  },
  {
    img: '/img/gallery-floriano/cartola.png',
    link: "https://musicpro.live/#5"
  },
  {
    img: '/img/gallery-floriano/pixinguinha.png',
    link: "https://musicpro.live/#6"
  },
  {
    img: '/img/gallery-floriano/cartola.png',
    link: "https://musicpro.live/#7"
  },
  {
    img: '/img/gallery-floriano/pixinguinha.png',
    link: "https://musicpro.live/#8"
  }
];


export const GalleryGrid = () => {
  return (
    <GalleryImage >

      {
        imgsGallery.map(imgItem => (
          <a href={imgItem.link}>
            <img src={imgItem.img} />
          </a>
            // <li key={imgItem.link}>
            //   <a href={imgItem.link} >
            //     <img src={imgItem.img} />
            //   </a>
            // </li>
          
        ))
      }

    </GalleryImage>
  )
}
