import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        <h1 className="text-3xl max-w-2xl text-center my-20 w-full mx-auto">
          প্রত্যয় শিল্পী গোষ্ঠি একটি পেশাদার ইসলামী গান, সঙ্গীত, ভিডিও এবং
          সামাজিক সচেতনতামূলক চলচ্চিত্র প্রযোজনা সংস্থা।
        </h1>

        <h1 className="text-3xl max-w-2xl text-center mb-10 w-full mx-auto">
          আমাদের পরিবেশনা
        </h1>

        <div className="grid grid-cols-2 grid-rows-2 gap-6 mb-96">
          <div className="relative overflow-hidden group col-span-1 row-span-2 border border-gray-900/5 hover:border-teal-600/30 rounded-xl">
            <Link href="/albums">
              <h1 className="text-3xl">অ্যালবাম</h1>
              <p>
                প্রত্যয় শিল্পী গোষ্ঠি একটি পেশাদার ইসলামী গান, সঙ্গীত, ভিডিও
                এবং সামাজিক সচেতনতামূলক চলচ্চিত্র প্রযোজনা সংস্থা।
              </p>
              <div className="mt-16 relative flex space-x-8">
                <div className="absolute animate-marquee flex py-4 gap-8">
                  <div className="relative aspect-[9/10] w-48 flex-none overflow-hidden bg-gray-100 rounded-2xl rotate-3">
                    <Image
                      src="/images/albums/1692198306837.png"
                      alt=""
                      fill={true}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative aspect-[9/10] w-48 flex-none overflow-hidden bg-gray-100 rounded-2xl -rotate-3">
                    <Image
                      src="/images/albums/1692198306837.png"
                      alt=""
                      fill={true}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative aspect-[9/10] w-48 flex-none overflow-hidden bg-gray-100 rounded-2xl rotate-3">
                    <Image
                      src="/images/albums/1692198306837.png"
                      alt=""
                      fill={true}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative aspect-[9/10] w-48 flex-none overflow-hidden bg-gray-100 rounded-2xl -rotate-3">
                    <Image
                      src="/images/albums/1692198306837.png"
                      alt=""
                      fill={true}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute  animate-marquee2 flex py-4 gap-8">
                  <div className="relative aspect-[9/10] w-48 flex-none overflow-hidden bg-gray-100 rounded-2xl rotate-3">
                    <Image
                      src="/images/albums/1692198306837.png"
                      alt=""
                      fill={true}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative aspect-[9/10] w-48 flex-none overflow-hidden bg-gray-100 rounded-2xl -rotate-3">
                    <Image
                      src="/images/albums/1692198306837.png"
                      alt=""
                      fill={true}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative aspect-[9/10] w-48 flex-none overflow-hidden bg-gray-100 rounded-2xl rotate-3">
                    <Image
                      src="/images/albums/1692198306837.png"
                      alt=""
                      fill={true}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative aspect-[9/10] w-48 flex-none overflow-hidden bg-gray-100 rounded-2xl -rotate-3">
                    <Image
                      src="/images/albums/1692198306837.png"
                      alt=""
                      fill={true}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-span-1 row-span-1 border border-gray-900/5 rounded-xl"></div>
          <div className="col-span-1 row-span-1 grid grid-cols-2 gap-6">
            <div className="border border-gray-900/5 rounded-xl"></div>
            <div className="border border-gray-900/5 rounded-xl"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
