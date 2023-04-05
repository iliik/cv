import React from 'react';
import style from './Nav.module.scss';
import 'animate.css';
import {Link} from "react-scroll"
import { Slide} from "react-awesome-reveal";

function Nav() {
    return (

        <div className={style.nav}>
            <Slide>
                <Link  activeClass={style.active} to='main' spy={true} smooth={true}
                      offset={0} duration={500}>Main</Link>
                <Link  activeClass={style.active} to='skills' spy={true} smooth={true}
                      offset={2} duration={500}>Skills</Link>
                <Link  activeClass={style.active} to='projects' spy={true} smooth={true}
                      offset={2} duration={500}>Project</Link>
                <Link  activeClass={style.active} to='contact' spy={true} smooth={true}
                      offset={-80} duration={500}>Contact</Link>
            </Slide>

        </div>
    );
}

export default Nav;
