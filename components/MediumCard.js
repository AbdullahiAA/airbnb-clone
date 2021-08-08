import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer group">
      <div className="relative h-80 w-80 rounded-xl overflow-hidden">
        <Image
          src={img}
          layout="fill"
          className="rounded-xl group-hover:scale-110 transition duration-300"
        />
      </div>

      <h3 className="text-xl sm:text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
