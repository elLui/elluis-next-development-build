"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "components/navigation/nav-item/nav-item.module.scss";




export default function NavItem( { item } ) {
	return (


		<li>
			<Link href={ item.link } className={ styles.navLink }>
				{ item.label }
				{ item.icon && ( <motion.div
					className={ styles.navIcon }
					whileHover={ { scale : 1.1 } }
					animate={ { rotateY : 360 } }
					transition={ { duration : 2, ease : "linear", repeat : Infinity } }
				>
					{ item.icon }
				</motion.div> ) }
			</Link>
		</li>


	);
}
