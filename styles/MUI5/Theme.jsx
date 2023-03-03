import { createTheme } from "@mui/system";




const theme_000 = createTheme( {
	                           palette: {
		                           primary: {
			                           main: "var(--color-cotton-candy)",
		                           },
		                           secondary: {
			                           main: "var(--color-jazzberry-jam)",
		                           },
		                           error: {
			                           main: "var(--color-scarlet)",
		                           },
		                           success: {
			                           main: "var(--color-screamin-green)",
		                           },
		                           background: {
			                           default: "var(--color-white-smoke)",
			                           paper: "var(--color-white)",
		                           },
		                           text: {
			                           primary: "var(--color-raisin-black)",
			                           secondary: "var(--color-mine-shaft)",
		                           },
	                           },
	                           typography: {
		                           fontFamily: "'Open Sans', sans-serif",
		                           fontSize: 14,
		                           fontWeightRegular: 400,
		                           fontWeightMedium: 600,
		                           fontWeightBold: 700,
		                           h1: {
			                           fontSize: "3rem",
			                           fontWeight: "bold",
			                           color: "var(--color-raisin-black)",
		                           },
		                           h2: {
			                           fontSize: "2.5rem",
			                           fontWeight: "bold",
			                           color: "var(--color-raisin-black)",
		                           },
		                           h3: {
			                           fontSize: "2rem",
			                           fontWeight: "bold",
			                           color: "var(--color-raisin-black)",
		                           },
		                           h4: {
			                           fontSize: "1.5rem",
			                           fontWeight: "bold",
			                           color: "var(--color-raisin-black)",
		                           },
		                           h5: {
			                           fontSize: "1.25rem",
			                           fontWeight: "bold",
			                           color: "var(--color-raisin-black)",
		                           },
		                           h6: {
			                           fontSize: "1rem",
			                           fontWeight: "bold",
			                           color: "var(--color-raisin-black)",
		                           },
		                           body1: {
			                           fontSize: "1rem",
			                           color: "var(--color-raisin-black)",
		                           },
		                           body2: {
			                           fontSize: "0.875rem",
			                           color: "var(--color-mine-shaft)",
		                           },
	                           },
	                           components: {
		                           MuiButton: {
			                           styleOverrides: {
				                           root: {
					                           backgroundColor: "var(--color-almond)",
					                           color: "var(--color-raisin-black)",
					                           "&:hover": {
						                           backgroundColor: "var(--color-jazzberry-jam)",
						                           color: "var(--color-white)",
					                           },
				                           },
			                           },
		                           },
		                           MuiInput: {
			                           styleOverrides: {
				                           root: {
					                           color: "var(--color-raisin-black)",
				                           },
				                           underline: {
					                           "&::before": {
						                           borderBottom: "1px solid var(--color-mine-shaft)",
					                           },
					                           "&::after": {
						                           borderBottom: `2px solid var(--color-jazzberry-jam)`,
					                           },
				                           },
			                           },
		                           },
	                           },
	                           overrides: {
		                           MuiCssBaseline: {
			                           "@global": {
				                           ":root": {
					                           "--color-almond": "#EFDECD", /* Almond */
					                           "--color-cotton-candy": "#FFBCD9", /* Cotton Candy */
					                           "--color-jazzberry-jam": "#CA3767", /* Jazzberry Jam */
					                           "--color-scarlet": "#FC2847", /* Scarlet */
					                           "--color-screamin-green": "#76FF7A", /* Screamin' Green */
					                           "--color-raisin-black": "#242124", /* Raisin Black */
					                           "--color-mine-shaft": "#333333", /* Mine Shaft */
					                           "--color-white-smoke": "#F5F5F5", /* White Smoke */
				                           },
			                           },
		                           },
	                           },
                           } );

export default theme;
