import {FaFacebook, FaInstagram, FaLinkedin, FaMusic, FaTwitter} from 'react-icons/fa';
import {NextComponentType} from "next";

const Footer: NextComponentType = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <FaMusic/>
                    <span className="ml-3 text-xl">Guitar Vault</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©
                    2020 -
                    <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer"
                       target="_blank">@GuitarVaultTeam</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
        <FaFacebook/>
      </a>
      <a className="ml-3 text-gray-500">
        <FaTwitter/>
      </a>
      <a className="ml-3 text-gray-500">
        <FaInstagram/>
      </a>
      <a className="ml-3 text-gray-500">
        <FaLinkedin/>
      </a>
    </span>
            </div>
        </footer>
    )
}

export default Footer
