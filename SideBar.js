import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { Profile } from '../pages/profile'

export default props => {
        return (
            
            <Menu>
            
                <a className="menu-item" href="/profile">
                    Profile  
                </a>

                <a className="menu-item" href="/about">
                    About           
                </a>

                <a className="menu-item" href="/invite">
                    Invite Your Friends           
                </a>
        
            </Menu>
        );
    };

























