import type {NextComponentType} from 'next'
import {router} from "next/client";

const Header: NextComponentType = () => {
    return (
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Guitar Vault</span>
                    </a>
                    <nav
                        className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" onClick={() => router.push('/')}>Accueil</a>
                        <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" onClick={() => router.push('/vault')}>The Vault</a>
                        <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" onClick={() => router.push('/offers')}>Annonces</a>
                        <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" onClick={() => router.push('/forum')}>Forum</a>
                        <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" onClick={() => router.push('/about')}>A propos</a>
                        <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" onClick={() => router.push('/contact')}>Contact</a>
                        {/*<a className="mr-5 hover:text-gray-900 hover:cursor-pointer">Accueil</a>*/}
                        {/*<a className="mr-5 hover:text-gray-900 hover:cursor-pointer">The Vault</a>*/}
                        {/*<a className="mr-5 hover:text-gray-900 hover:cursor-pointer">Annonces</a>*/}
                        {/*<a className="mr-5 hover:text-gray-900 hover:cursor-pointer">Forum</a>*/}
                    </nav>
                    <button
                        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                             className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
    )
}

export default Header
