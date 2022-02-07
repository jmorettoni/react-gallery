import React from 'react';
import { useEffect, useState } from "react";

import { ArtisteProfile, Container, ProfileIcons, ProfileInformations, ProfileLinkedinIcon, ProfileSocialNetworks } from './styles'

import { GalleryHeader } from '../Header';
import { GalleryGridImages } from '../Grid';
import { GalleryArtistProfile } from '../ArtistProfile';
import { GalleryFooter } from '../Footer';
// import { useState } from 'react/cjs/react.development';
// import { useEffect } from 'react/cjs/react.production.min';
import axios from 'axios';


export const GalleryPage = () => {
  const [estado, setEstado] = useState([]);

  useEffect(() => {
    const req = async () => {
      var objSearch = new URLSearchParams();
      objSearch.append('gallery_id',"floriano-1"); 
      var config = {
        method: 'post',
        url: 'https://us-east-1.aws.data.mongodb-api.com/app/application-0-fkaiw/endpoint/get_gallery?gallery_id=floriano-2',
        headers: { }
      };
      const { data } = await axios(config)

      setEstado(data)

      console.log(data)
    }

    req()

  }, [])


  return <div>

    <GalleryHeader />

    <GalleryGridImages estado={estado}/>

    <GalleryArtistProfile />

    <GalleryFooter />

  </div>;
}
