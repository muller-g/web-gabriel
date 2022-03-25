import styles from './NavList.module.css'
import logo from '../img/logo.png'

function NavList(){     
    function handleCloseMenuMob(){
        let widthT = window.screen.width;
        console.log(widthT)
        let showMenu = document.querySelector('nav ul');
        if(widthT <= 414){
            if(showMenu.style.transform == "translateX(200%)"){
                showMenu.style.transform = "translateX(0%)";
            } else {
                showMenu.style.transform = "translateX(200%)";
            }
        }
    }
    

    function handleCloseMenu(){
        let showMenu = document.querySelector('nav ul');
        if(showMenu.style.transform == "translateX(200%)"){
            showMenu.style.transform = "translateX(0%)";
        } else {
            showMenu.style.transform = "translateX(200%)";
        }
    }

    function handleOnClick(){
        let hamburger = document.querySelector('.NavList_hamburger_menu__dNIBo');
        let showMenu = document.querySelector('nav ul');
        if(hamburger.style.marginRight == "80px"){
            hamburger.style.marginRight = "0px"
            showMenu.style.transform = "translateX(200%)";
        } else {
            showMenu.style.transform = "translateX(0%)";
        }
    }

    return(
        <nav className={styles.nav_header}>
            <a href="#ola"><img src={logo}/></a>
            <ul>
                <li><a href="#" onClick={handleCloseMenu}>X</a></li>
                <li><a href="#ola" onClick={handleCloseMenuMob}>Olá</a></li>
                <li><a href="#ajuda" onClick={handleCloseMenuMob}>Você precisa de um site?</a></li>      
                <li><a href="#eu-faco" onClick={handleCloseMenuMob}>Eu faço</a></li>      
                <li><a href="#contato" onClick={handleCloseMenuMob}>Me chama</a></li>      
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
