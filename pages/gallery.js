import Link from 'next/link'

import GalleryGrid from '../components/GalleryGrid';


{ }
export default function Gallery() {
	return (
		<div>

			<body>

				<section>
					<header>
						<img src="/img/gallery-floriano/assinatura-vetorizada.png"></img>

						<div class="icons-header">

							<a>
								<img src="/img/icons/facebook-icon.jpg"></img>
							</a>
							<a>
								<img src="/img/icons/twitter-icon.jpg"></img>
							</a>
							<a>
								<img src="/img/icons/discord-icon.jpg"></img>
							</a>
							<a>
								<img src="/img/icons/pinterest-icon.jpg"></img>
							</a>
							<a>
								<img src="/img/icons/youtube-icon.jpg"></img>
							</a>
							<a>
								<img src="/img/icons/telegram-icon.jpg"></img>
							</a>
							
						</div>

						<hr id='line'></hr>

					</header>
				</section>

				{/* <h1>GALLERY</h1> */}

				<section class="gallery">

					<h1>NFT COLLECTION</h1>

					<div class="gallery-img">
						<GalleryGrid />
					</div>

				</section>

				<section class="profile">
					<div class="profile-floriano-img">
						<img src="/img/gallery-floriano/assinatura-e-caricatura.jpg"></img>
					</div>

					<div>
						<h1>Floriano</h1>

						<div class="profile-social-media">
							<a class="profile-social-media_linkedin">
								<img src="/img/icons/linkedin-icon.jpg"></img>
							</a>
							<a>
								<img src="/img/icons/facebook-icon.jpg"></img>
							</a>
							<a>
								<img src="/img/icons/twitter-icon.jpg"></img>
							</a>
							<a>
								<img src="/img/icons/discord-icon.jpg"></img>
							</a>
							<a>
								<img src="/img/icons/pinterest-icon.jpg"></img>
							</a>
							<a>
								<img src="/img/icons/youtube-icon.jpg"></img>
							</a>
							<a>
								<img src="/img/icons/telegram-icon.jpg"></img>
							</a>
						</div>

						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
							ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
							ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
							sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							est laborum</p>

					</div>

				</section>

				<Link href="/">
					<a>VOLTAR</a>
				</Link>

				<section>
					<footer>

						<div>

						</div>

					<img src="/img/icons/creator-icon.png"></img>
					<p>Copyright © 2021 por jmorettoni</p>
					<p>All rights reserved</p>


					</footer>
				</section>

			</body>

		</div>
	)


}