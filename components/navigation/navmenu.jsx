"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { nav_data } from "@/data/nav-data";
import NavItem from "@/components/navigation/nav-item/nav-item";
import styles from "./navmenu.module.css";

export default function NavMenu() {
	return (
		<div className={styles.navMenu}>
			<Navbar />
		</div>
	);
}

function Navbar() {
	return (
		<nav>
			<ul>
				{nav_data.map((item) => (
					<NavItem key={item.id} item={item} />
				))}
			</ul>
		</nav>
	);
}
