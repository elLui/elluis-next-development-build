"use client";
import { nav_data } from "@/data/nav-data";
import NavItem from "@/components/navigation/nav-item/nav-item";






export default function NavMenu() {
	const navItems = nav_data || [];
	
	return (
		<div className="navMenu">
			<NavItem item nav-data-item={ { ...nav_data } }/>
		</div>
	);
}