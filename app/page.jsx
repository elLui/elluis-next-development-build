import Hero from "@/components/hero/hero";
import {  Inter } from 'next/font/google'
import { Fragment } from "react";




const inter = Inter( { subsets : [ 'latin' ] } )

export default function Home() {
	return (

		<Fragment>
			<Hero/>


		</Fragment>
	)
}
