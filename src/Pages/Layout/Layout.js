import React from 'react';
import MainMenu from '../../components/MainMenu/MainMenu';

const Layout = (props)=>{
    return(
        <div className="layout">
            <MainMenu />
            {props.children}
        </div>
    )
}
export default Layout;