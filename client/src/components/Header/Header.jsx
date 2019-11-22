import React from 'react';
import  logo from '../../Assets/MYtineraryLogob.svg';

const header = ()=>{
    return(
        <header className="container-fluid col-12 p-4">
            <img src={logo} id={"banner"} alt=""/> 
            </header>
    );

}
export default header;