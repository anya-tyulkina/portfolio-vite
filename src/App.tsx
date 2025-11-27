import './App.css'
import {Header} from "./components/layout/header/Header.tsx";
import {Main} from "./components/layout/section/main/Main.tsx";
import {Works} from "./components/layout/section/portfolio/Portfolio.tsx";
import {Testimony} from "./components/layout/section/testimony/Testimony.tsx";
import {Footer} from "./components/layout/footer/Footer.tsx";
import {AboutMe} from "./components/layout/section/aboutMe/AboutMe.tsx";
import {Quote} from "./components/layout/section/quote/Quote.tsx";
import {Achievement} from "./components/layout/section/achievement/Achievement.tsx";
import {BLogs} from "./components/layout/section/blogs/BLogs.tsx";
import {Contacts} from "./components/layout/section/contacts/Contacts.tsx";
import {GoToTopBtn} from "./components/goToTopBtn/GoToTopBtn.tsx";

function App() {
    return (
        <div className={"main-container"}>
            <Header/>
            <Main/>
            <AboutMe/>
            <Works/>
            <Quote/>
            <Achievement/>
            <BLogs/>
            <Testimony/>
            <Contacts/>
            <Footer/>
            <GoToTopBtn/>
        </div>
    )
}

export default App

