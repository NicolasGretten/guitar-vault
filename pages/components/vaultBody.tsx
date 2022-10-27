import {NextComponentType} from "next";
import Image from "next/image";

const VaultBody: NextComponentType = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex w-full mb-20 flex-wrap">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">The Vault</h1>
                        <div className="h-1 w-20 bg-purple-500 rounded"/>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Ici vous pouvez retrouver les avis des instruments de nos utilisateurs, accompagné de photos et d'un ou plusieurs clip audio.</p>
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <Image src="https://dummyimage.com/500x300" width={500} height={300} alt="dummy" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image src="https://dummyimage.com/500x300" width={500} height={300} alt="dummy" />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <Image src="https://dummyimage.com/750x360" width={750} height={360} alt="dummy" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <Image src="https://dummyimage.com/750x360" width={750} height={360} alt="dummy" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image src="https://dummyimage.com/500x300" width={500} height={300} alt="dummy" />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image src="https://dummyimage.com/500x300" width={500} height={300} alt="dummy" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VaultBody


