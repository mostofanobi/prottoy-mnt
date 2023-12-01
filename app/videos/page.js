import React from "react";
import VideoItem from "./VideoItem";

const videos = [
  {
    id: "xb9NJUhwJFo",
    title: "লাশের মিছিল || প্রত্যয় শিল্পীগোষ্ঠী",
    views: 356,
    postedAt: new Date("2023-11-07"),
  },
  {
    id: "nsPpe1poMz8",
    title:
      "সূরা ক্বফ || আয়াতঃ০১-০৬ || নূর ইসলাম স্বাধীন || প্রত্যয় শিল্পীগোষ্ঠী",
    views: 238,
    postedAt: new Date("2023-09-18"),
  },
  {
    id: "AVZj7FQYdoY",
    title: "কুরবানী হোক || ঈদের নতুন গান || প্রত্যয় শিল্পীগোষ্ঠী",
    views: 3200,
    postedAt: new Date("2023-06-28"),
  },
  {
    id: "Qf2wPAwROjM",
    title:
      "ভয় পেয়ো না || জুনাইনা মেহজাবিন || শিশু শিল্পী || প্রত্যয় শিল্পীগোষ্ঠী",
    views: 331,
    postedAt: new Date("2023-05-28"),
  },
  {
    id: "yFpXxk080CI",
    title: "রাত নিঝুম হলো || মওদুদ আলম || প্রত্যয় শিল্পীগোষ্ঠী",
    views: 780,
    postedAt: new Date("2023-05-11"),
  },
  {
    id: "rQ2dNmzAkwo",
    title: "উঠলো হেসে দূর আকাশে || প্রত্যয় শিল্পীগোষ্ঠী",
    views: 1079,
    postedAt: new Date("2023-04-13"),
  },
  {
    id: "06gTdEnuAWA",
    title: "ফজরের আযান হইলে চাষি ভাই || প্রত্যয় শিল্পীগোষ্ঠী",
    views: 303,
    postedAt: new Date("2023-03-30"),
  },
  {
    id: "oX_qq5JSDwY",
    title: "যে মাটির বুকে || মুনওয়ার হোসেন || প্রত্যয় শিল্পীগোষ্ঠী",
    views: 260,
    postedAt: new Date("2023-03-29"),
  },
  {
    id: "V61_v9DNM1g",
    title: "এই পৃথিবী ওই আকাশের || প্রত্যয়ের হামদ || প্রত্যয় শিল্পীগোষ্ঠী",
    views: 421,
    postedAt: new Date("2023-01-18"),
  },
];

const Videos = () => {
  return (
    <div className="container mx-auto px-6 lg:px-8 mt-10 mb-20">
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {videos.map((video) => (
          <VideoItem key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default Videos;
