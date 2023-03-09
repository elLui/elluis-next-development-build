"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";



const HeroSectionStyles = styled.section`
  .hero {
    text-align: center;
    background-image: linear-gradient(to bottom,
    var(--color-grey-900),
    var(--color-grey-800));
    padding: var(--size-8) 0;
  }

  .image {
    width: 300px;
    height: 300px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--color-grey-700);
    margin: auto;
  }

  .image img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }

  .hero h1 {
    font-size: var(--size-16);
    margin: var(--size-4) 0;
    color: var(--color-grey-300);
  }

  .hero p {
    font-size: var(--size-6);
    color: var(--color-grey-200);
    width: 90%;
    max-width: 40rem;
    margin: auto;
  }

`;

const items = [ {
    id : "item-1", title : "item 1", subtitle : "item 1 subtitle"
}, {
    id : "item-2", title : "item 2", subtitle : "item 2 subtitle"
}, {
    id : "item-3", title : "item 3", subtitle : "item 3 subtitle"
} ];



export default function Hero() {
    
    
    
    const [ selectedId, setSelectedId ] = useState( null );
    return ( <div>
        
        <HeroSectionStyles className="hero">
            <h3>a place</h3>
            {
                
                items.map( item => (
                    
                    <motion.div layoutId={ item.id } onClick={ () => setSelectedId( item.id ) }>
                        <motion.h5>{ item.subtitle }</motion.h5>
                        <motion.h2>{ item.title }</motion.h2>
                    </motion.div>
                
                ) ) }
            
            <AnimatePresence>
                
                
                { selectedId && (
                    
                    <motion.div layoutId={ selectedId }>
                        <motion.h5>{ item.subtitle }</motion.h5>
                        <motion.h2>{ item.title }</motion.h2>
                        <motion.button onClick={ () => setSelectedId( null ) }/>
                    </motion.div> ) }
            
            </AnimatePresence>
            <div className="image">
                {/* <Image src={ user_image_placeholder } alt={ "user image placeholder" } width={ 1920 } height={ 1080 }/> */ }
            </div>
            
            <h1>elluis.codes</h1>
            <p>to think</p>
            <p>of things</p>
        </HeroSectionStyles>
    </div> );
}






