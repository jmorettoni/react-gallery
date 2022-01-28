import React, { Component } from 'react';


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
 

export default class GalleryGrid extends Component {
	render() {
	return (
	 <div>
  
					<ul  >
					   {
						imgsGallery.map(imgItem => (
							<li key={imgItem.link}>
								
								{/* style={{ display:'inline' , marginLeft:'10px'}} */}
							 	<a  href={imgItem.link} >
									 {/* target="_blank" */}
								    <img src={imgItem.img}  /> 
									{/* width="130" */}
								 </a>
							</li>
						))
						}
					 </ul>  
     </div>
   )} 
}