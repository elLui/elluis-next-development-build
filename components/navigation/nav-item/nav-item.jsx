
//"use client";
//// NavItem.jsx
//import { motion } from "framer-motion";
//import Link from "next/link";
//import clsx from "clsx";
//
//import styles from "components/navigation/nav-item/nav-item.module.scss";
//
//
//
//
//export default function NavItem( { item } ) {
//
//	const { id, label, link, isActive, icon } = item;
//	return ( <div>
//			<li>
//				<Link href={ link } title={ label }>
//					<div>
//						<>
//							{ label }
//						</>
//						{ item.icon }
//						<motion.div
//							className={ clsx( styles.navIcon, {
//								[ styles.animate ]: true,
//							} ) }
//						>
//							{ item.icon }
//						</motion.div>
//					</div>
//				</Link>
//			</li>
//		</div>
//	)
//		;
//}