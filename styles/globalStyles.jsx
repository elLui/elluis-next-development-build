"use client"
import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`(
/**
 * @source https://fonts.adobe.com/fonts/objektiv-variable
 */
@import url("https://use.typekit.net/ptz3vfb.css");
@import url("https://use.typekit.net/ptz3vfb.css");
body {
  --color-grey-50: hsl(265, 55%, 96%);
  --color-grey-100: hsl(265, 19%, 88%);
  --color-grey-200: hsl(265, 7%, 70%);
  --color-grey-300: hsl(265, 6%, 66%);
  --color-grey-400: hsl(265, 4%, 57%);
  --color-grey-500: hsl(265, 3%, 53%);
  --color-grey-600: hsl(265, 4%, 42%);
  --color-grey-700: hsl(265, 4%, 31%);
  --color-grey-800: hsl(276, 5%, 20%);
  --color-grey-900: hsl(280, 5%, 13%);
  --color-primary-50: #c8b3ce;
  --color-primary-100: #a07aaa;
  --color-primary-200: #884c97;
  --color-primary-300: #843897;
  --color-primary-400: #732392;
  --color-primary-500: #5a097a;
  --color-primary-600: #480264;
  --color-primary-700: #3d0264;
  --color-success-100: #a2f0bc;
  --color-success-500: #12bd4b;
  --color-error-100: #f1acc9;
  --color-error-500: #a10c4a;
  --color-primary: #0e3fbe;
  --color-primary-dark: #0c1b68;
  --color-secondary: #e36e2d;
  --color-secondary-dark: #923809;
  --color-grey-light-1: #f9f7f6;
  --color-grey-light-2: #8c92a5;
  --color-grey-dark-1: #716a66;
  --color-grey-dark-2: #3f3d39;
  --size-0: 0;
  --size-1: 0.25rem;
  --size-2: 0.5rem;
  --size-3: 0.75rem;
  --size-4: 1rem;
  --size-5: 1.25rem;
  --size-6: 1.5rem;
  --size-8: 2rem;
  --size-16: 4rem;
  --size-20: 5rem;
  --size-40: 10rem;
  --default-size-0: 0;
  --bp-xsmall: 30em;
  --bp-small: 37.5em;
  --bp-medium: 50em;
  --bp-large: 62.5em;
  --bp-xlarge: 75em;
  --primary-font: "objektiv-variable", sans-serif;
  --primary-display-font: "louvette-banner", serif;
}

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  /**
   * not sure if this is working as I expect:
   * @problem: want to make sure that only objecktiv, and sans-serif show, up on user display(properties)
   * @issue: want to make sure the remainder of the fonts are still available as a backup, but not displayed client side
   * unless needed
   * @current: we have grouped our primary font: into a css variable:

   per:   --primary-font: "objektiv-variable", sans-serif;

   we are then calling that as our first argument:

   per: font-family: var(--primary-font) -apple-system, BlinkMacSystemFont, Segoe UI, etc.

   @current-conclusion: at this moment the only fonts being displayed on the user system or the two fonts declared in the
   --primary-font declaration

   @questions: so far we are unsure about the timing and loading of the two fonts, if they do no load in x time, do the
   backup fonts kick in
   */
  font-family: var(--primary-font), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  padding: var(default-size-0);
  margin: var(default-size-0);
  background-color: var(--color-grey-500);
  color: var(--color-grey-dark-2);
}

h1,
h2,
h3 {
  font-family: var(--primary-display-font);
  font-weight: 400;
  font-style: normal;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  font: inherit;
  cursor: pointer;
}

/*# sourceMappingURL=globals.css.map */

)`;


//import { GlobalStyles } from "@mui/material";
//
//
//
//
//export const GlobalStyle = () => {
//	return (
//		<GlobalStyles
//
//			styles={ {
//				:root {
//				--color-grey-50: hsl(265, 55%, 96%),
//				--color-grey-100: hsl(265, 19%, 88%),
//				--color-grey-200: hsl(265, 7%, 70%),
//				--color-grey-300: hsl(265, 6%, 66%),
//				--color-grey-400: hsl(265, 4%, 57%),
//				--color-grey-500: hsl(265, 3%, 53%),
//				--color-grey-600: hsl(265, 4%, 42%),
//				--color-grey-700: hsl(265, 4%, 31%),
//				--color-grey-800: hsl(276, 5%, 20%),
//				--color-grey-900: hsl(280, 5%, 13%),
//				--color-primary-50: #c8b3ce;
//				--color-primary-100: #a07aaa;
//				--color-primary-200: #884c97;
//				--color-primary-300: #843897;
//				--color-primary-400: #732392;
//				--color-primary-500: #5a097a;
//				--color-primary-600: #480264;
//				--color-primary-700: #3d0264;
//				--color-success-100: #a2f0bc;
//				--color-success-500: #12bd4b;
//				--color-error-100: #f1acc9;
//				--color-error-500: #a10c4a;
//			}
//				/>
//			}
//			}
//
//	);
//};
////
////// colors
////			--color-primary: #0e3fbe;
////			--color-primary-dark: #0c1b68;
////			--color-secondary: #e36e2d;
////			--color-secondary-dark: #923809;
////			--color-grey-light-1: #f9f7f6;
////			--color-grey-light-2: #8c92a5;
////			--color-grey-dark-1: #716a66;
////			--color-grey-dark-2: #3f3d39;
////
////
////// sizes
////			--size-0: 0;
////			--size-1: 0.25rem;
////			--size-2: 0.5rem;
////			--size-3: 0.75rem;
////			--size-4: 1rem;
////			--size-5: 1.25rem;
////			--size-6: 1.5rem;
////			--size-8: 2rem;
////			--size-16: 4rem;
////			--size-20: 5rem;
////			--size-40: 10rem;
////
////			--default-size-0: 0;
////
////// breakpoints
////			--bp-xsmall: 30em; //  480px
////			--bp-small: 37.5em; //  600px
////			--bp-medium: 50em; //  800px
////			--bp-large: 62.5em; // 1000px
////			--bp-xlarge: 75em; // 1200px
////
////
////			--primary-font: "objektiv-variable", sans-serif;
////
////			--primary-display-font: "louvette-banner", serif;
////
////
////		}
////
////*, *
////	::before,
////*
////	::after;
////	{
////		box - sizing;
////	:
////		border - box;
////	}
////
////	body;
////	{
////		/**
////		 * not sure if this is working as I expect:
////		 * @problem: want to make sure that only objecktiv, and sans-serif show, up on user display(properties)
////		 * @issue: want to make sure the remainder of the fonts are still available as a backup, but not displayed
////		 *     client side unless needed
////		 * @current: we have grouped our primary font: into a css variable:
////    per:   --primary-font: "objektiv-variable", sans-serif;
////    we are then calling that as our first argument:
////    per: font-family: var(--primary-font) -apple-system, BlinkMacSystemFont, Segoe UI, etc.
////    @current-conclusion: at this moment the only fonts being displayed on the user system or the two fonts declared in
////         the
////    --primary-font declaration
////    @questions: so far we are unsure about the timing and loading of the two fonts, if they do no load in x time, do
////         the
////    backup fonts kick in
////		 */
////		font - family;
////	:
////		var (;
////		--primary - font;
////	),
////		-apple - system, BlinkMacSystemFont, Segoe;
////		UI, Roboto, Oxygen,
////			Ubuntu, Cantarell, Fira;
////		Sans, Droid;
////		Sans, Helvetica;
////		Neue, sans - serif;
////		padding: var (;
////	default
////		-size - 0;
////	)
////		;
////		margin: var (;
////	default
////		-size - 0;
////	)
////		;
////		background - color;
////	:
////		var (;
////		--color - grey - 500;
////	)
////		;
////		color: var (;
////		--color - grey - dark - 2;
////	)
////		;
////	}
////
////	h1,
////		h2,
////		h3;
////	{
////
////
////		font - family;
////	:
////		var (;
////		--primary - display - font;
////	)
////		;
////		font - weight;
////	:
////		400;
////		font - style;
////	:
////		normal;
////
////	}
////
////	a;
////	{
////		color: inherit;
////		text - decoration;
////	:
////		none;
////	}
////
////	ul;
////	{
////		list - style;
////	:
////		none;
////	}
////
////	button;
////	{
////		font: inherit;
////		cursor: pointer;
////	}
////
////
////	/>;
////)
////};
////
////
////
////
//////	                                           /**
//////	                                            * @source https://fonts.adobe.com/fonts/objektiv-variable
//////	                                            */
//////		                                           @import url("https://use.typekit.net/ptz3vfb.css");
//////.example {
//////  font-family: "objektiv-variable", sans-serif;
//////  font-variation-settings: 'wght' 400;
//////}
//////
//////	                                           @import url("https://use.typekit.net/ptz3vfb.css");
//////font-family: "louvette-banner", serif;
//////font-weight: 400;
//////font-style: normal;
//////
//////font-family: "louvette-banner", serif;
//////font-weight: 400;
//////font-style: italic;
//////
//////font-family: "louvette-banner", serif;
//////font-weight: 700;
//////font-style: normal;
