import React from 'react';
import style from './Nav.module.scss';
import 'animate.css';
import {Link} from "react-scroll"


function Nav() {
    return (

        <div className={style.nav}>
            <Link className="animate__heartBeat" activeClass={style.active} to='main' spy={true} smooth={true}
                  offset={1} duration={500}>Main</Link>
            <Link className="animate__heartBeat" activeClass={style.active} to='skills' spy={true} smooth={true}
                  offset={1} duration={500}>Skills</Link>
            <Link className="animate__heartBeat" activeClass={style.active} to='projects' spy={true} smooth={true}
                  offset={1} duration={500}>Project</Link>
            <Link className="animate__heartBeat" activeClass={style.active} to='contact' spy={true} smooth={true}
                  offset={1} duration={500}>Contact</Link>
        </div>
    );
}

export default Nav;
