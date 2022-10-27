import Image from "next/image";
import {FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";
import React from "react";

type AboutProps = {
    firstName: string;
    lastName: string;
    position: string;
    description: string;
    facebookURI: string;
    twitterURI: string;
    linkdinURI: string;
};

const TeamCard = (props: AboutProps) => {
    return (
        <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
                <Image src={`/${props.firstName}.jpg`} width={200} height={200} alt="dummy" objectFit="contain"/>
                <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">{props.firstName} {props.lastName}</h2>
                    <h3 className="texat-gray-500 mb-3">{props.position}</h3>
                    <p className="mb-4"> {props.description}</p>
                    <span className="inline-flex">
              <a className="text-gray-500 hover:cursor-pointer" href={props.facebookURI}>
                <FaFacebook/>
              </a>
              <a className="ml-2 text-gray-500 hover:cursor-pointer" href={props.twitterURI}>
                <FaTwitter/>
              </a>
              <a className="ml-2 text-gray-500 hover:cursor-pointer" href={props.linkdinURI}>
                <FaLinkedin/>
              </a>
            </span>
                </div>
            </div>
        </div>
    )
}

export default TeamCard
