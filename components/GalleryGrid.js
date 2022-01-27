import React, { Component } from 'react';


const imgsGallery = [
	{
	  img: '/img/gallery-floriano/cartola.jpg',
	  link: "https://musicpro.live/#1"
	},
	{
		img: '/img/gallery-floriano/pixinguinha.jpg',
		link: "https://musicpro.live/#2"
	},
	{
		img: '/img/gallery-floriano/praia-de-itaipu.jpg',
		link: "https://musicpro.live/#3"
	}
  ];
 

export default class GalleryGrid extends Component {
	render() {
	return (
	 <div> 
					<ul  >
					   {
						imgsGallery.map(imgItem => (
							<li key={imgItem.link} style={{ display:'inline' , marginLeft:'10px'}}>
							 	<a  href={imgItem.link} target="_blank">
								    <img src={imgItem.img}  width="130" /> 
								 </a>
							</li>
						))
						}
					 </ul>  
     </div>
   )} 
}