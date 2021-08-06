import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
    return (
        <div className="relative my-16">
            <div className="relative h-96">
                <Image 
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>

            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-12">
                <h3 className="text-4xl mb-3 w-56">{title}</h3>
                <p>{description}</p>

                <button className="text-sm bg-gray-900 text-white py-2 px-4 rounded-lg mt-5 cursor-pointer">{buttonText}</button>
            </div>
        </div>
    )
}

export default LargeCard
