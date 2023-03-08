import Hero from "@/components/hero/hero";
import {  Inter } from 'next/font/google'
import { Fragment } from "react";
import FeaturedPosts from "@/components/featured-posts/featured-posts";




const inter = Inter( { subsets : [ 'latin' ] } )

export default function Home() {
	return (

		<Fragment>
			<Hero />
			<FeaturedPosts/>


		</Fragment>
	)
}
