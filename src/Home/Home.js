import React from 'react'
import { FaHome } from 'react-icons/fa';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { AiOutlineLogin, AiOutlineSearch } from 'react-icons/ai';
import { getAuth, signInWithPopup } from "firebase/auth";

import logoSmall from '../Assets/logoSmall.png'
import logoBig from '../Assets/logoBig.png'
import '../Home/Home.css'
import { provider } from '../Firebase/Firebase'

function Home() {
    const signIn = () => {
        const auth = getAuth()
        signInWithPopup(auth, provider)
        .then(res => console.log(res)).catch(err => console.log(err))
    }
    return (
        <div className='container-background'>
            <nav className='container'>
                <div>
                    <img src={logoSmall} alt='logo' width={30} className='logo'/>
                    <span className='download'>Download Now !</span>
                </div>
                <div className='navbar'>
                    <p><span className='icons'><FaHome/></span>Home</p>
                    <p><span className='icons'><BiMessageSquareAdd/></span>Cook!</p>
                    <p onClick={signIn}><span className='icons'><AiOutlineLogin/></span>Login</p>
                </div>
            </nav>
            <header>
                <h1> <img src={logoBig} alt='logo' width={60} className='logos'/>KOOLINARY</h1>
                <br/>
                <h3>Kook Ur Own Koolinary</h3>
                <br/>
                <form>
                    <span className='icons-search'><AiOutlineSearch/></span><input type="text" name="name" placeholder='Search your food here ...' className='search-bar'/>
                </form>
            </header>
        </div>
    )
}

export default Home
