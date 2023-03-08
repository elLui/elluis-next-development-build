import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';


const NavItem = ({nav_data}) => {
    return (


        <div>
            {nav_data.map(({id, label, link, isActive, icon}) => (
                <li key={id}>
                    <Link href={link} className="navLink">
                        {label}
                        <br/>
                        <div className="icon_wrapper">{icon}</div>
                    </Link>
                </li>
            ))}
        </div>


    );
};

export default NavItem;
