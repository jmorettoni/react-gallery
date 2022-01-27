import Link from 'next/link'
 

export default function Gallery() {
	return (
	 <div>
		<h1>GALLERY</h1>
		
	    <h1 className="title">
	        {' '}
	       <Link href="/">
	         <a>VOLTAR</a>
	       </Link>
	   </h1>
     </div>
)
  
  
}