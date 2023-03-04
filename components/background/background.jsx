"use client";
import { useEffect, useRef, useState } from "react";
import { AspectRatio, Box, styled } from "@chakra-ui/react";
import backgroundVideo from "../../public/assets/video/AdobeStock_255259620.mp4";
import { css } from "@emotion/react";
import { div } from "three/nodes";




const BackgroundVideoStyles = styled( Box )`
  .videoBG {
    position: absolute;

    background-color: #a9c5c5;
    background-attachment: scroll;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: fill;
    opacity: 0.125;
  }

  @keyframes play {
    100% {
      //transform: translateY(-100%);
      //transform: scale(0.25);
    }
  }`;




export default function BackgroundVideo() {
	
	const [ aspectRatio, setAspectRatio ] = useState( 16 / 9 );
	const videoRef = useRef( null );
	
	useEffect( () => {
		const handleResize = () => {
			const { innerWidth, innerHeight } = window;
			setAspectRatio( innerWidth / innerHeight );
//			console.log( innerWidth, innerHeight );
		};
		handleResize();
		window.addEventListener( "resize", handleResize );
		return () => window.removeEventListener( "resize", handleResize );
	}, [] );
	
	
	return (
		<BackgroundVideoStyles>
			
			<AspectRatio ratio={ aspectRatio } css={ backgroundVideoStyles }>
				{/* playsInline is needed for IOS */ }
				<video playsInline autoPlay muted loop>
					<source src={ backgroundVideo } type="video/mp4"/>
				</video>
			</AspectRatio>
		</BackgroundVideoStyles>
	
	
	);
};

