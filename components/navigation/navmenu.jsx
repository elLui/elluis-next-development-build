"use client";
// NavMenu.jsx
import { nav_data } from "@/data/nav-data";
import NavItem from "@/components/navigation/nav-item/nav-item";
import styles from "components/navigation/navmenu.module.scss";




export default function NavMenu() {
	const navItems = nav_data || [];
	
	return (
		
		<div>
			<div>
				
				{/* <NavItem  item nav-data-item={ {... nav_data }}/> */ }
			
			</div>
		</div>
	
	);
}



