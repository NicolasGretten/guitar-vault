import type { NextPage } from 'next'
import Layout from "./components/layout";
import Image from "next/image";
import {FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";
import TeamCard from "./components/teamCard";

const teams = [
    {
        firstName: "Nicolas",
        lastName: "Gretten",
        position: "CTO & Lead Developper",
        description: "Bassiste et collectionneur d'instrument",
        facebookURI: "",
        twitterURI: "",
        linkdinURI: "",
    },
    {
        firstName: "Dorian",
        lastName: "Spano",
        position: "Président & chef des opérations",
        description: "Guitariste, collectionneur et propriétaire d'une Alembic Darling",
        facebookURI: "",
        twitterURI: "",
        linkdinURI: "",
    },
]

const About: NextPage = () => {
    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Qu'est ce que Guitar Vault ?</h1>
                            <div className="h-1 w-20 bg-purple-500 rounded"/>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Guitar Vault est un application qui veux regrouper des tests d'instrument, des ventes aux enchères et un forum principalement autour des instruments de musique.</p>
                    </div>
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">Notre équipe</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Ici vous retrouverez l'équipe de Guitar Vault et leurs réseaux sociaux</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {teams.map((teamMember) => {
                            return TeamCard(teamMember)
                        })}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default About
