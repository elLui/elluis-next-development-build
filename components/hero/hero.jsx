import Image from "next/image";

import styles from "./hero.module.scss";
import user_image_placeholder from "../../public/assets/images/11.png";




export default function Hero() {


	return (

		<section className={ styles.hero }>
			<h3>a place</h3>


			<div className={ styles.image }>
			<Image src={ user_image_placeholder } alt={ "user image placeholder" } width={ 1920 } height={ 1080 }/>
			</div>

			<h1>elluis.codes</h1>


			<p>to think</p>
			<p>of things</p>
		</section>

	)



}