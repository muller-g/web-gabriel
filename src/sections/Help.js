import styles from './Help.module.css'
import gitIcon from '../img/github-svgrepo-com.svg'
import LinkIcon from '../img/linkedin-svgrepo-com.svg'
import TypeWriter from "typewriter-effect";
import videoGif from '../img/ezgif.com-gif-maker.gif'

function Help(){
    return(
        <div className={styles.help_container} id="ajuda">
            <div className={styles.text}>
                <div className={styles.text_left}>
                    <h1>Vamos&nbsp;<span className={styles.title_blue}>
                        <TypeWriter
                            options={{
                                strings: ['desenvolver!'],
                                autoStart: true,
                                loop: true,
                            }}
                        />    
                        </span>
                    </h1>
                    <p>Precisamos mostrar nossa empresa ou nosso negócio, para o maior número de pessoas possíveis. Precisamos fazer nossa marca ser conhecida, e nos dias de hoje, nada melhor que trabalhar com as redes sociais e com o desenvolvimento de sites e sistemas que atendam essa demanda. 
                    </p>
                    <p>Se você ta precisando de um site para o seu negócio, eu posso te ajudar a desenvolver da melhor forma que te agrade e com as melhores técnologias do mercado.</p>
                    <div className={styles.btn_line}>
                        <a href="https://1drv.ms/b/s!AvuYXISbMpgXhmCORahJ5LSOj4H0?e=cJjOd7" target="_blank">Currículo Gabriel</a>
                        <a href="https://github.com/muller-g?tab=repositories" target="_blank"><img src={gitIcon} alt="git icon" /></a>
                        <a href="https://www.linkedin.com/in/gabriel-muller-64a21a209/" target="_blank"><img src={LinkIcon} alt="linkedin icon" /></a>
                    </div>
                </div>
                <div className={styles.text_right}>
                    <img src={videoGif} alt="site gif" />
                    {/* <video autoPlay muted loop>
                        <source src={videoSite}/>
                    </video> */}
                    <p>Site desenvolvido para <span>Caps Store Brasil</span></p>
                </div>
            </div>
        </div>
    )
}
export default Help