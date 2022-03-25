import Header from '../template/Header'
import Footer from '../template/Footer'
import Ola from '../sections/Ola'
import Help from '../sections/Help'
import Ido from '../sections/Ido'
import Contact from '../sections/Contact'

function Home(){   
    return(<div>
        <Header /> 
            <Ola />
            <Help />
            <Ido />
            <Contact />
        <Footer />
    </div>)
}

export default Home