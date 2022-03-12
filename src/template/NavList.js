import styles from './NavList.module.css'
import logo from '../img/logo.png'
import {useState} from 'react'

function NavList(){   
    function handleCloseMenu(){
        var showMenu = document.querySelector('.NavList_nav_header__xyzXh ul');
        if(showMenu.style.transform == "translateX(200%)"){
            showMenu.style.transform = "translateX(0%)";
        } else {
            showMenu.style.transform = "translateX(200%)";
        }
    }

    function handleOnClick(){
        var hamburger = document.querySelector('.NavList_hamburger_menu__Q23sr');
        var showMenu = document.querySelector('.NavList_nav_header__xyzXh ul');
        if(hamburger.style.marginRight == "80px"){
            hamburger.style.marginRight = "0px"
            showMenu.style.transform = "translateX(200%)";
        } else {
            showMenu.style.transform = "translateX(0%)";
        }
    }

    return(
        <nav className={styles.nav_header}>
            <a href="#"><img src={logo}/></a>
            <ul>
                <li><a href="#" onClick={handleCloseMenu}>X</a></li>
                <li><a href="#">Início</a></li>
                <li><a href="#">Sobre</a></li>      
                <li><a href="#">Contato</a></li>      
            </ul>
            <div className={styles.hamburger_menu} onClick={handleOnClick}>
                <div className={styles.hamburger}>
                    <div className={styles.line_1}></div>
                    <div className={styles.line_2}></div>
                    <div className={styles.line_3}></div>
                </div>
            </div>
        </nav>
    )
}

export default NavList