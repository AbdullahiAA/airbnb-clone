import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="group flex flex-col sm:flex-row gap-5 py-7 px-2 pr-4 border-t last:border-b hover:shadow-lg transition duration-300 ease-out cursor-pointer">
      {/* Image Section */}
      <div className="relative w-full h-40 sm:w-64 sm:h-52 flex-shrink-0 overflow-hidden rounded-2xl">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl group-hover:scale-110 transition"
        />
      </div>

      {/* Other Info Section */}
      <div className="flex flex-col gap-2 flex-grow">
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm">{location}</p>
          <HeartIcon className="h-6" />
        </div>

        <h4 className="text-xl text-gray-800">{title}</h4>

        <hr className="w-10" />

        <p className="text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center gap-1">
            <StarIcon className="h-4 text-yellow-500" />
            <span>{star}</span>
          </p>

          <div className="text-right">
            <p className="text-lg lg:text-xl font-semibold">{price}</p>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
