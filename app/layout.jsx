import BackgroundVideo from "@/components/background/background";
import NavMenu from "@/components/navigation/nav-menu";
import {GlobalStyles} from "@/styles/globalStyles";





// this is the new <Head /> component -
export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
	link: "https://use.typekit.net/ptz3vfb.css",
};

export default function RootLayout( { children } ) {
	return (
		<html lang="en">
		<body>
		<GlobalStyles/>
		<BackgroundVideo/>
		<NavMenu/>
		{ children }
		</body>
		</html>
	);
}
