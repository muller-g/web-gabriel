import styles from './Contact.module.css'
import logInsta from '../img/instagram-svgrepo-com.svg'
import logLink from '../img/linkedin-svgrepo-com.svg'
import logGit from '../img/github-svgrepo-com.svg'
import logWpp from '../img/whatsapp-svgrepo-com.svg'

function Contact(){
    
    /* function handleSubmitContact(e){
        e.preventDefault();
        
        var inputName = document.getElementById('name');
        var inputEmail = document.getElementById('email');
        var inputText = document.getElementById('msg');
        var inputPhone = document.getElementById('phone');
        
        if(inputName.value == "" || inputEmail.value == "" || inputPhone.value == "" || inputText.value == ""){
            alert("Preencha todos os campos!");
        } 

        
    } */

    return(
        <div className={styles.contact_container} id="contato">
            <div className={styles.contact}>
                <h1>Entre em contato comigo!</h1>
                <div className={styles.contact_social}>
                    <div className={styles.social_div}><a href="https://www.instagram.com/_mullerg/" target="__blank"><img src={logInsta} alt="insta icon"/></a></div>
                    <div className={styles.social_div}><a href="https://api.whatsapp.com/send?phone=5547997003649&text=Ol%C3%A1%2C%20vim%20pelo%20site!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento!" target="__blank"><img src={logWpp} alt="wpp icon"/></a></div>
                    <div className={styles.social_div}><a href="https://www.linkedin.com/in/gabriel-muller-64a21a209/" target="__blank"><img src={logLink} alt="link icon"/></a></div>
                    <div className={styles.social_div}><a href="https://github.com/muller-g" target="__blank"><img src={logGit} alt="git icon"/></a></div>
                </div>
                <h1>ou preecha o formulário</h1>
                <form id="form-gabriel" action='sendEmail.php'>
                    <div className={styles.contact_form}>
                        <div className={styles.contact_inputs}>
                            <input type="text" name="name" id="name" placeholder="Nome"/>
                            <input type="email" name="email" id="email" placeholder="E-mail"/>
                            <input type="text" name="phone" id="phone" placeholder="99 99999-9999"/>
                        </div>
                        <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Deixe sua mensagem"></textarea>
                    </div>
                    <input type="submit" value="Enviar"/>
                </form>    
            </div>
        </div>
        
    )
}

export default Contact