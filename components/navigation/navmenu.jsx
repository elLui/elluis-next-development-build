"use client"
// NavMenu.jsx
import { nav_data } from "@/data/nav-data";
import NavItem from "@/components/navigation/nav-item/nav-item";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import styles from "components/navigation/navmenu.module.scss";





export default function NavMenu() {
	const navItems = nav_data || [];

	return ( <div className={ styles.navMenu }>
		<div>

			<NavItem  item nav-data-item={ {... nav_data }}/>

		</div>
	</div> );
}



