"use client"
import FeaturedPosts from "@/components/featured-posts/featured-posts";
import Hero from "@/components/hero/hero";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment } from "react";
import styles from './home.module.scss'
import Grid from '@mui/material/Grid';




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

