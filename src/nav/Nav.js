import React from 'react';
import style from './Nav.module.scss';
import 'animate.css';


function Nav() {
    return (

        <div className={style.nav}>
            <a className="animate__heartBeat" href="">Main</a>
            <a className="animate__heartBeat" href="">Skills</a>
            <a className="animate__heartBeat" href="">Project</a>
            <a className="animate__heartBeat" href="">Contact</a>
        </div>
    );
}

export default Nav;
