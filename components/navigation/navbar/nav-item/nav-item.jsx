"use client"
import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion";
import { nav_data } from "@/data/nav-data";
import Link from "next/link";




export default function NavItem() {



	return (
		<ul>
			{
				nav_data.map( ( item ) => {

					return (


						<li key={ item.id }>
							<Link href={ item.link }>{ item.label }</Link>
							{ item.icon }
						</li>


					)
				} )
			}
		</ul>
	)
}


function RotatingIcon() {


	const { camera } = useThree();

	return (
		<motion.mesh
			whileHover={ { scale : 1.1 } }
			animate={ { rotateY : 360 } }
			transition={ { duration : 2, ease : "linear", repeat : Infinity } }>


		</motion.mesh>
	)


}