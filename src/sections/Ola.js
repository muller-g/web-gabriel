import styles from './Ola.module.css'
import TypeWriter from "typewriter-effect";
import downS from '../img/down.png'

function Ola(){
    return(
        <div className={styles.container} id="ola">
            <div className={styles.container_home}>
                <div className={styles.name_info}>
                    <p>Olá, meu nome é</p>
                    <h1>Gabriel Müller</h1>
                    <p>eu posso desenvolver <span className={styles.span_change}>
                    <TypeWriter
                        options={{
                            strings: [' o seu site!', ' a sua landing page!', ' a sua tela de login!', ' o seu sistema!', ' a sua home page!', ' o que você quiser!'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    </span></p>                   
                </div>
            </div>
            <div className={styles.lets_code}>
                    <h1 id="h1-text">Bora começar esse <span>projeto(); </span></h1>
            </div> 
            <div className={styles.continue_bottom}>
                <a href="#ajuda">
                    <p>Venha conhecer meu trabalho</p>
                    <img src={downS} alt="Arrow down"/>
                </a>
            </div>
        </div>
    )
}

export default Ola