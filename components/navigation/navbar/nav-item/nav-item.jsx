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