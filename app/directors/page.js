import Image from "next/image";

const directors = [
  {
    name: "সামিউল ইসলাম রনি",
    service_period: "বর্তমান",
    image:
      "https://res.cloudinary.com/dxmprjgjm/image/upload/v1694371257/1694371257293.jpg",
  },
  {
    name: "হারুন অর রশিদ",
    service_period: "সেপ্টেম্বর ২০২২ - ফেব্রুয়ারি ২০২৩",
    image:
      "https://res.cloudinary.com/dxmprjgjm/image/upload/v1693118385/1693118384963.jpg",
  },
  {
    name: "তৌহিদ আলম মণ্ডল",
    service_period: "জুলাই ২০২১ - আগস্ট ২০২২",
    image:
      "https://res.cloudinary.com/dxmprjgjm/image/upload/v1693136653/1693136653756.jpg",
  },
  {
    name: "আ খ ম মুস্তাফিজ",
    service_period: "জানুয়ারী ২০২০ - জুলাই ২০২১",
    image:
      "https://res.cloudinary.com/dxmprjgjm/image/upload/v1693119635/1693119634960.jpg",
  },
  {
    name: "সাদ্দাম হোসেন",
    service_period: "জানুয়ারী ২০১৯ - ডিসেম্বর ২০১৯",
    image:
      "https://res.cloudinary.com/dxmprjgjm/image/upload/v1695223241/1695223241452.jpg",
  },
  {
    name: "ডা. জাভেদ",
    service_period: "জুলাই ২০১৭ - ডিসেম্বর ২০১৮",
    image:
      "https://res.cloudinary.com/dxmprjgjm/image/upload/v1692617499/1692617499180.jpg",
  },
  {
    name: "হাফেজ জয়নাল আবেদীন",
    service_period: "জানুয়ারী ২০১৫ - জুন ২০১৭",
    image:
      "https://res.cloudinary.com/dxmprjgjm/image/upload/v1693119013/1693119013481.jpg",
  },
  {
    name: "শাহাদ মোহাম্মদ নুরুল্লাহ",
    service_period: "জানুয়ারী ২০১৪ - ডিসেম্বর ২০১৪",
    image:
      "https://res.cloudinary.com/dxmprjgjm/image/upload/v1694952694/1694952694475.jpg",
  },
  {
    name: "এম. ইউসুফ ইসলাম",
    service_period: "প্রতিষ্ঠাতা পরিচালক",
    image:
      "https://res.cloudinary.com/dxmprjgjm/image/upload/v1694066511/1694066511386.jpg",
  },
];
const Directors = () => {
  return (
    <div class="grid place-items-center min-h-screen mt-10 mb-20">
      {/* <!-- Responsive Grid Layout --> */}
      <div class="p-6 container grid self-center gap-6 sm:grid-cols-2 xs:p-8 2xl:grid-cols-4 lg:grid-cols-3 lg:gap-8">
        <div className="col-span-full flex flex-col items-center justify-center text-center gap-10 mb-20">
          <h1 className="text-5xl font-medium flex-1 leading-[1.2]">
            প্রত্যয়ের সম্মানিত <br />
            পরিচালকবৃন্দ
          </h1>
          <p className="text-lg flex-1 max-w-2xl text-gray-600">
            প্রত্যয় শিল্পী গোষ্ঠি একটি পেশাদার ইসলামী গান, সঙ্গীত, ভিডিও এবং
            সামাজিক সচেতনতামূলক চলচ্চিত্র প্রযোজনা সংস্থা। প্রত্যয় শিল্পী
            গোষ্ঠি একটি পেশাদার ইসলামী গান, সঙ্গীত, ভিডিও এবং সামাজিক
            সচেতনতামূলক চলচ্চিত্র প্রযোজনা সংস্থা।
          </p>
        </div>
        {directors.map(({ name, image, service_period }) => (
          <div key={name} className="flex items-center justify-center">
            <div>
              <div className="relative h-96 aspect-[3/4] shadow-xl rounded-3xl">
                <div className="absolute h-full w-full bg-teal-500 rounded-2xl -rotate-6"></div>
                <Image
                  className="rounded-2xl bg-white object-cover shadow-2xl"
                  src={image}
                  fill={true}
                  loading="lazy"
                  alt={name}
                />
              </div>
              <div className="my-8">
                <h1 className="text-3xl font-semibold">{name}</h1>
                <p className="text-black/70">{service_period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directors;
