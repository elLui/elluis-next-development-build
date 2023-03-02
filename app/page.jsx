"use client"
import FeaturedPosts from "@/components/featured-posts/featured-posts";
import Hero from "@/components/hero/hero";

import { Inter } from 'next/font/google'





export default function Home() {
	return (

		<div>
			<div>
				<Hero/>
			</div>
			<div>
				<FeaturedPosts/>
			</div>
		</div>

	)
}




const inter = Inter( { subsets : [ 'latin' ] } )

