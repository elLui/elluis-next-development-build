"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";
import { nav_data } from "@/data/nav-data";




const NavItemList = styled.ul`





`;


export default function NavItem( {} ) {
	
	return (
		
		
		<NavItemList>
			{
				
				nav_data.map( ( nav_item ) => {
					
					return (
						
						<li key={ nav_item.id }>
							<Link href={ nav_item.link } className="navLink">
								{ nav_item.label }
								<br/>
								<div className="icon_wrapper">
									{ nav_item.icon }
								</div>
							</Link>
						</li>
					);
				} ) }
		</NavItemList>
	
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
