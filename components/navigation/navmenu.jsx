import styles from "./navmenu.module.css";
import Navbar from "@/components/navigation/navbar/navbar";




export default function NavMenu() {


	return (

		<div className={ styles.navMenu }>
			<Navbar/>
		</div>

	)

}