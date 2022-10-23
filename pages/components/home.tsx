import {NextComponentType} from "next";
import Image from "next/image";

const HomeBody: NextComponentType = () => {
    return (
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-20">
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Qu'est ce que Guitar Vault ?</h1>
                                <div className="h-1 w-20 bg-purple-500 rounded"></div>
                            </div>
                            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Guitar Vault est un application qui veux regrouper des tests d'instrument, des ventes aux enchères et un forum principalement autour des instruments de musique.</p>
                        </div>
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-wrap -m-5 text-center">
                                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                                 strokeLinejoin="round" strokeWidth="2"
                                                 className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                                 viewBox="0 0 24 24">
                                                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                            </svg>
                                            <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                            <p className="leading-relaxed">Downloads</p>
                                        </div>
                                    </div>
                                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                                 strokeLinejoin="round" strokeWidth="2"
                                                 className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                                 viewBox="0 0 24 24">
                                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                            </svg>
                                            <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                                            <p className="leading-relaxed">Users</p>
                                        </div>
                                    </div>
                                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                                 strokeLinejoin="round" strokeWidth="2"
                                                 className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                                 viewBox="0 0 24 24">
                                                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                                <path
                                                    d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                                            </svg>
                                            <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                                            <p className="leading-relaxed">Files</p>
                                        </div>
                                    </div>
                                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                                 strokeLinejoin="round" strokeWidth="2"
                                                 className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                                 viewBox="0 0 24 24">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                            </svg>
                                            <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                                            <p className="leading-relaxed">Places</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="flex flex-wrap -m-4">
                            <div className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <Image src="https://dummyimage.com/720x400" width={720} height={400} alt="dummy" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat.
                                        Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <Image src="https://dummyimage.com/720x400" width={720} height={400} alt="dummy" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat.
                                        Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <Image src="https://dummyimage.com/720x400" width={720} height={400} alt="dummy" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat.
                                        Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <Image src="https://dummyimage.com/720x400" width={720} height={400} alt="dummy" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat.
                                        Distillery hexagon disrupt edison bulbche.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    )
}

export default HomeBody
