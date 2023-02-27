import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './home.module.scss'




const inter = Inter( { subsets : [ 'latin' ] } )

export default function Home() {
	return (
		<main className={ styles.main }>

			<h1>hello beautiful</h1>
		</main>
	)
}
