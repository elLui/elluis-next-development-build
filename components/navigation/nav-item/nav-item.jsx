"use client"
import { nav_data } from "@/data/nav-data";
import Grid2 from "@mui/material/Unstable_Grid2";
// NavItem.jsx
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { Grid } from "@mui/material";
import styles from "components/navigation/nav-item/nav-item.module.scss";




export default function NavItem( { nav_data } ) {

	//	const { id, label, link, isActive, icon } = nav_data;




	return (
		//		<Grid2 item spacing={0} xs={12} sm={6} md={4} lg={3}>
		//			<li className={ styles.navItem }>
		//				<Link href={ link } className={ styles.navLink } title={ label }>
		//					{ id }:{ label }:{ link }:{ isActive }:{ icon }
		//
		//				</Link>
		//			<h1>hello elluis, you are special today</h1>
		//			</li>
		//		</Grid2>

		<>
			<h1>Nav Item Placeholder</h1>

		</>

	);
}




// SUB-ONE-HUNDRED-CLUB
//"use client"
//// NavItem.jsx
//import { motion } from "framer-motion";
//import Link from "next/link";
//import clsx from "clsx";
//import { Grid } from "@mui/material";
//import styles from "components/navigation/nav-item/nav-item.module.scss";
//
//
//
//
//export default function NavItem( { item } ) {
//
//	const { id, label, link, isActive, icon } = item;
//	return (
//		<Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
//			<li className={ styles.navItem }>
//				<Link href={ link } className={ styles.navLink } title={ label }>
//					<Grid container alignItems="center" justifyContent="center">
//						<Grid item xs={ 12 }>
//							{ label }
//						</Grid>
//						{ item.icon && (
//							<Grid item xs={ 12 }>
//								<motion.div
//									className={ clsx( styles.navIcon, {
//										[ styles.animate ] : true,
//									} ) }
//								>
//									{ item.icon }
//								</motion.div>
//							</Grid>
//						) }
//					</Grid>
//				</Link>
//			</li>
//		</Grid>
//	);
//}
