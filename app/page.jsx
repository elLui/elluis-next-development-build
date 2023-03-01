"use client"
import FeaturedPosts from "@/components/featured-posts/featured-posts";
import Hero from "@/components/hero/hero";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment } from "react";
import styles from './home.module.scss'
import Grid from '@mui/material/Grid';




const inter = Inter( { subsets : [ 'latin' ] } )




export default function Home() {
	return (

		<Grid container spacing={2}>
			<Grid item xs={12} md={6}>
				<Hero />
			</Grid>
			<Grid item xs={12} md={6}>
				<FeaturedPosts />
			</Grid>
		</Grid>
	)
}
