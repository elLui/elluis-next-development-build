import styles from "components/background/background.module.scss";
import background_video from "../../public/assets/video/AdobeStock_255259620.mp4"




export default function BackgroundVideo() {



	let video__background;
	return (

		<div>
			{/* playsinline is needed for IOS */ }
			<video playsInline autoPlay muted loop className={ styles.video__background }>
				<source src={ background_video } type={ "video/mp4" }/>
			</video>
		</div>

	)

}