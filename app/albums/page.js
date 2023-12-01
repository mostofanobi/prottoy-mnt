import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

const albums = [
  {
    name: "অন্যান্য",
    href: "/album/others",
  },
  {
    name: "প্যারোডি গান",
    image:
      "https://res.cloudinary.com/dxmprjgjm/image/upload/v1692198582/1692198579617.png",
    href: "/album/parodi_gaan",
  },
  {
    name: "হৃদয়ের স্বরলিপি",
    image:
      "https://res.cloudinary.com/dxmprjgjm/image/upload/v1692198310/1692198306837.png",
    href: "/album/hridoyer_shorolipi",
  },
  {
    name: "শিহরন",
    image:
      "https://res.cloudinary.com/dxmprjgjm/image/upload/v1692198717/1692198714576.png",
    href: "/album/shihoron",
  },
  {
    name: "রূহী",
    image:
      "https://res.cloudinary.com/dxmprjgjm/image/upload/v1692198676/1692198671152.png",
    href: "/album/ruhi",
  },
  {
    name: "চেতনা",
    image:
      "https://res.cloudinary.com/dxmprjgjm/image/upload/v1691253746/1691253736482.jpg",
    href: "/album/chetona",
  },
  {
    name: "জন্মভূমির গান",
    image:
      "https://res.cloudinary.com/dxmprjgjm/image/upload/v1692198364/1692198361228.png",
    href: "/album/jonmovumir_gaan",
  },
  {
    name: "তাজী",
    image:
      "https://res.cloudinary.com/dxmprjgjm/image/upload/v1692198786/1692198783832.png",
    href: "/album/tazi",
  },
];

const Album = () => {
  return (
    <div class="mt-10 mb-20">
      <div class="px-6 container mx-auto grid lg:px-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-y-20">
        {albums.map(({ name, image, href }) => (
          <div key={name} className="flex justify-center">
            <Link href={href} className="group">
              <div className="relative h-60 aspect-[3/4] group-hover:scale-[1.04] transition-all duration-200 shadow-xl rounded-2xl bg-teal-600">
                <Image
                  className={classNames({
                    "absolute z-20 rounded-2xl bg-teal-600 shadow-xl": true,
                    "object-contain": !image,
                    "object-cover": image,
                  })}
                  src={image || "/images/logo-white.png"}
                  fill={true}
                  loading="lazy"
                  alt=""
                />
                <div className="absolute top-3 left-12 group-hover:animate-spin-slow h-[90%] aspect-square z-10">
                  <Image
                    className="absolute h-full w-full"
                    src="/images/cd2.png"
                    fill={true}
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-5 ml-2">
                <h1 className="text-2xl">{name}</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Album;
