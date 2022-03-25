import styles from './Ido.module.css'
import reactIcon from '../img/react-js.svg'
import htmlIcon from '../img/html.svg'
import cssIcon from '../img/css.svg'
import jsIcon from '../img/javascript.svg'
import phpIcon from '../img/php.svg'
import gitIcon from '../img/git.svg'
import Donut from '../components/Donut'
import DonutDesigner from '../components/DonutDesigner'
import DonutSeo from '../components/DonutSeo'
import TypeWriter from "typewriter-effect";

function Ido(){
    return(
        <div className={styles.ido} id="eu-faco">
            <div className={styles.text}>
                <div className={styles.text_left}>
                    <h1>Desenvolvedor&nbsp;<span className={styles.title_blue}>
                        <TypeWriter
                            options={{
                                strings: ['Front End'],
                                autoStart: true,
                                loop: true,
                            }}
                        />    
                        </span>
                    </h1>
                    <p>A 2 anos trabalhando como programador Front End, cursei Ciências da Computação e Sistemas para Internet.
                        Atualmente trabalho com as técnologias que estão em alta no mercado.
                    </p>
                    <p>
                        Desings 100% responsivos, suporte total, alterações e correções até ficar da forma que o cliente desejar!
                    </p>
                </div>
                <div className={styles.text_right}>
                    <div className={styles.icons_line}>
                        <div className={styles.img_content}><img id="react" src={reactIcon} alt="React icon"/></div>
                        <div className={styles.img_content}><img src={htmlIcon} alt="html icon"/></div>
                        <div className={styles.img_content}><img src={cssIcon} alt="css icon"/></div>
                    </div>
                    <div className={styles.icons_line}>
                        <div className={styles.img_content}><img src={jsIcon} alt="js icon"/></div>
                        <div className={styles.img_content}><img src={phpIcon} alt="php icon"/></div>
                        <div className={styles.img_content}><img src={gitIcon} alt="git icon"/></div>
                    </div>
                </div>
            </div>
            <div className={styles.skills}>
                <h1>O que eu sei fazer?</h1>
                <div className={styles.skills_container}>
                    <div className={styles.skill_card}>
                        <h1>Desenvolvedor Front End</h1>
                        <p>Experiência em anos</p>
                        <Donut />
                        <p>Desenvolvimento de sites, sistemas e landing pages responsivas</p>
                    </div>
                    <div className={styles.skill_card}>
                        <h1>Designer</h1>
                        <p>Experiência em anos</p>
                        <DonutDesigner />
                        <p>Criação de flyers, banners, artes para mídias socias, cartões de visitas e afins</p>
                    </div>
                    <div className={styles.skill_card}>
                        <h1>SEO & Ads</h1>
                        <p>Experiência em anos</p>
                        <DonutSeo />
                        <p>Criação de campanhas e análise de dados do site</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ido