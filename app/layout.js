import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import './globals.css'


import BackgroundVideo from "@/components/background/background";




export const metadata = {
	title : 'Create Next App',
	description : 'Generated by create next app',
}

export default function RootLayout( { children } ) {
	return (
		<html lang="en">
		<body>
		<BackgroundVideo/>
		{ children }
		</body>
		</html>
	)
}
