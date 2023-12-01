import Image from "next/image";
import { BsMic, BsBook, BsAward, BsCameraReels } from "react-icons/bs";
import { PiChalkboardTeacher, PiTelevisionSimple } from "react-icons/pi";

const About = () => {
  return (
    <section>
      <div className="mt-20 mb-40 xl:mx-auto xl:max-w-7xl px-6 xl:px-8">
        <div className="flex flex-col items-center justify-center text-center gap-10 mb-20">
          <h1 className="text-5xl font-medium flex-1 leading-[1.2]">
            প্রত্যয় শিল্পীগোষ্ঠি, <br /> সুস্থ সংস্কৃতির পথিকৃত।
          </h1>
          <p className="text-lg flex-1 max-w-2xl text-gray-600">
            প্রত্যয় শিল্পী গোষ্ঠি একটি পেশাদার ইসলামী গান, সঙ্গীত, ভিডিও এবং
            সামাজিক সচেতনতামূলক চলচ্চিত্র প্রযোজনা সংস্থা। প্রত্যয় শিল্পী
            গোষ্ঠি একটি পেশাদার ইসলামী গান, সঙ্গীত, ভিডিও এবং সামাজিক
            সচেতনতামূলক চলচ্চিত্র প্রযোজনা সংস্থা।
          </p>
        </div>
        <div className="relative aspect-[5/2] w-full rounded-3xl shadow-2xl">
          <div className="absolute h-full w-full bg-teal-600 rounded-3xl -rotate-3"></div>
          <Image
            src="/images/team-cover.png"
            fill={true}
            loading="lazy"
            alt="Prottoy Team"
            className="object-cover rounded-3xl bg-white"
          />
        </div>
      </div>
      {/* আমাদের কার্যক্রম */}
      <div className="bg-gray-50 py-40 mb-40">
        <div className="xl:mx-auto xl:max-w-7xl px-6 xl:px-8">
          <div className="flex flex-col items-center justify-center text-center gap-10 mb-20">
            <h1 className="text-5xl font-medium flex-1 leading-[1.2]">
              আমাদের কার্যক্রম
            </h1>
            <p className="text-lg flex-1 max-w-2xl text-gray-600">
              প্রত্যয় শিল্পী গোষ্ঠি একটি পেশাদার ইসলামী গান, সঙ্গীত, ভিডিও এবং
              সামাজিক সচেতনতামূলক চলচ্চিত্র প্রযোজনা সংস্থা।
            </p>
          </div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <li className="col-span-1 p-4 flex items-center gap-6 rounded-lg bg-white border">
              <div className="w-16 h-16 flex items-center justify-center bg-teal-600 rounded-2xl -rotate-12">
                <BsMic className="text-white text-3xl rotate-12" />
              </div>
              <p className="text-2xl">সাংস্কৃতিক অনুষ্ঠান</p>
            </li>
            <li className="col-span-1 p-4 flex items-center gap-6 rounded-lg bg-white border">
              <div className="w-16 h-16 flex items-center justify-center bg-teal-600 rounded-2xl -rotate-12">
                <PiChalkboardTeacher className="text-white text-4xl rotate-12" />
              </div>
              <p className="text-2xl">প্রশিক্ষণ কার্যক্রম</p>
            </li>
            <li className="col-span-1 p-4 flex items-center gap-6 rounded-lg bg-white border">
              <div className="w-16 h-16 flex items-center justify-center bg-teal-600 rounded-2xl -rotate-12">
                <BsCameraReels className="text-white text-4xl rotate-12" />
              </div>
              <p className="text-2xl">পরিবেশনা</p>
            </li>
            <li className="col-span-1 p-4 flex items-center gap-6 rounded-lg bg-white border">
              <div className="w-16 h-16 flex items-center justify-center bg-teal-600 rounded-2xl -rotate-12">
                <PiTelevisionSimple className="text-white text-4xl rotate-12" />
              </div>
              <p className="text-2xl">টিভি প্রোগ্রাম</p>
            </li>
            <li className="col-span-1 p-4 flex items-center gap-6 rounded-lg bg-white border">
              <div className="w-16 h-16 flex items-center justify-center bg-teal-600 rounded-2xl -rotate-12">
                <BsBook className="text-white text-4xl rotate-12" />
              </div>
              <p className="text-2xl">প্রকাশনা</p>
            </li>
            <li className="col-span-1 p-4 flex items-center gap-6 rounded-lg bg-white border">
              <div className="w-16 h-16 flex items-center justify-center bg-teal-600 rounded-2xl -rotate-12">
                <BsAward className="text-white text-4xl rotate-12" />
              </div>
              <p className="text-2xl">প্রতিযোগিতা</p>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="h-96 bg-gray-50 w-full"></div> */}
      <div className="mb-40 xl:mx-auto xl:max-w-7xl px-6 xl:px-8">
        <div className="flex flex-col items-center justify-center text-center gap-10">
          <h1 className="text-5xl font-medium flex-1 leading-[1.2]">
            প্রত্যয়ের পথচলা
          </h1>
          <p className="text-lg flex-1 max-w-2xl text-gray-600">
            বিদ্রোহী কবি কাজি নজরুল ইসলাম, রেঁনেসার কবি ফররুখ আহমদ এবং ইসলামী
            সংস্কৃতির পথিকৃৎ কবি মতিউর রহমান মল্লিক এর এঁকে যাওয়া পথে চলতে থাকে
            একদল শিল্পী, বুঁকে লেখা একটি নাম প্রত্যয়।
          </p>
        </div>
      </div>

      <div className="bg-white mb-32">
        <div className="bg-teal-600 pb-20 sm:pb-24 xl:pb-0">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 xl:px-8 xl:flex-row xl:items-stretch">
            <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative aspect-[5/4] h-full md:-mx-8 xl:mx-0 xl:aspect-auto shadow-xl rounded-3xl">
                <div className="absolute h-full w-full bg-teal-500 rounded-2xl -rotate-6"></div>
                <Image
                  className="rounded-2xl bg-gray-800 object-cover shadow-2xl"
                  src="/images/founding-director.jpg"
                  fill={true}
                  loading="lazy"
                  alt="Prottoy Team"
                />
              </div>
            </div>
            <div className="w-full text-white max-w-2xl xl:max-w-none xl:flex-auto xl:p-16">
              <figure className="relative pt-20 xl:pt-0">
                <div className="mb-8">
                  <h1 className="text-3xl font-semibold">এম. ইউসুফ ইসলাম</h1>
                  <p className="text-white/70">প্রতিষ্ঠাতা পরিচালক</p>
                </div>
                <p className="xl:text-xl text-lg leading-8 text-white">
                  ডা.আব্দুর রহমান এর অগ্রণী ভূমিকায় রাজশাহী মেডিকেল কলেজ থেকে
                  সাইরেন শিল্পীগোষ্ঠী নামে যাত্রা শুরু করে একদল তরুণ। অধ্যাপক
                  হাবিবুর রহমান এর মনকাড়া গম্ভীরা গান খুব অল্প সময়ের মধ্যে
                  সাইরেনের সুনাম ছড়িয়ে দেয়। এরপর হাল ধরেন এম. ইউসুফ ইসলাম তার
                  সময়ে সাইরেনের নাম পরিবর্তন করে প্রত্যয় নাম রাখা হয়। তার সুচারু
                  ভূমিকায় প্রত্যয় এগিয়ে যায় আরো একধাপ। হাসিনুর রব মানুর কাওয়ালি,
                  প্যারোডি আর গীতি-নঁকশা সাড়া জাগায় দেশ জুড়ে।
                </p>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-40">
        <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 xl:text-xl text-lg leading-8 lg:max-w-none lg:grid-cols-2">
          <div>
            <p>
              ডা.আব্দুর রহমান এর অগ্রণী ভূমিকায় রাজশাহী মেডিকেল কলেজ থেকে সাইরেন
              শিল্পীগোষ্ঠী নামে যাত্রা শুরু করে একদল তরুণ। অধ্যাপক হাবিবুর রহমান
              এর মনকাড়া গম্ভীরা গান খুব অল্প সময়ের মধ্যে সাইরেনের সুনাম ছড়িয়ে
              দেয়। এরপর হাল ধরেন এম. ইউসুফ ইসলাম তার সময়ে সাইরেনের নাম পরিবর্তন
              করে প্রত্যয় নাম রাখা হয়। তার সুচারু ভূমিকায় প্রত্যয় এগিয়ে যায় আরো
              একধাপ।
            </p>
            <p className="mt-4">
              হাসিনুর রব মানুর কাওয়ালি, প্যারোডি আর গীতি-নঁকশা সাড়া জাগায় দেশ
              জুড়ে। এরপর আর পেছন ফেরে তাকাতে হয়নি। আধুনিক সুর আর কথামালা নিয়ে
              প্রত্যয় ছুটে যায় গ্রাম থেকে গ্রাম, শহর থেকে শহর, দেশের এক প্রান্ত
              থেকে অন্য প্রান্তে। গঠনমূলক সাংস্কৃতিক কর্মকান্ডের ধারাবাহিকতায়
              প্রত্যয় পরিণত হয় এক অদম্য-মহীরুহে ।
            </p>
          </div>
          <div>
            <p>
              সমগ্র বিশ্ব যখন অপসংস্কৃতির বিষবাষ্পে জর্জরিত, মানবতা যখন ঘোর
              আঁধারে নিমজ্জিত এবং আত্মিক প্রশান্তির কথা ভুলে বেছে নিয়েছে পাপের
              নুড়ি আর ভুলে গেছে আপন সত্বা ও অস্তিত্ব, ঠিক তখনি আঁধারে নিমজ্জিত
              মানবতাকে আলোর দিশা দেখানোর ক্ষুদ্র প্রয়াস নিয়ে পদ্মা বিধৌত হযরত
              শাহ্ মাখ্দুম রূপোস (র) এর স্মৃতি বিজড়িত পূণ্যভূমি রাজশাহীতে পথ চলা
              শুরু করে প্রত্যয় শিল্পী গোষ্ঠী।
            </p>
            <p className="mt-4">
              প্রতিষ্ঠালগ্ন থেকেই প্রত্যয়ের রয়েছে গৌরবোজ্জল ইতিহাস। সুস্থ
              সংস্কৃতির নান্দনিক বিকাশে প্রত্যয় শিল্পী গোষ্ঠী গান, অভিনয়, নাটক
              আবৃত্তি, গম্ভীরাসহ সমাজ সচেতনতামূলক নানাবিধ কর্মকান্ড অব্যাহত।
              বিদ্রোহী কবি কাজি নজরুল ইসলাম, রেঁনেসার কবি ফররুখ আহমদ এবং ইসলামী
              সংস্কৃতির পথিকৃৎ কবি মতিউর রহমান মল্লিক এর এঁকে যাওয়া পথে চলতে
              থাকে একদল শিল্পী, বুঁকে লেখা একটি নাম প্রত্যয়।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
