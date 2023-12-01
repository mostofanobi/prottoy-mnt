"use client";
import Image from "next/image";
import Link from "next/link";

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

const LEADING_ZERO_FORMATTER = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
});

const formatter = new Intl.RelativeTimeFormat(undefined, {
  numeric: "always",
});

const DIVISIONS = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
];

const formatTimeAgo = (date) => {
  let duration = (date.getTime() - new Date().getTime()) / 1000;

  for (let i = 0; i < DIVISIONS.length; i++) {
    const division = DIVISIONS[i];
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name);
    }
    duration /= division.amount;
  }
};

const VideoItem = ({ id, title, views, postedAt }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-video">
        <iframe
          className="block w-full h-full object-cover border rounded-2xl"
          title={title}
          src={`https://www.youtube.com/embed/${id}?modestbranding=1`}
          frameborder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex gap-2">
        <Link
          href="https://www.youtube.com/@ProttoyShilpiGoshti"
          target="_blank"
          className="relative flex-shrink-0 w-12 h-12 rounded-full"
        >
          <Image
            alt="প্রত্যয় শিল্পীগোষ্ঠি"
            fill={true}
            src="https://yt3.googleusercontent.com/VWCzfpclln3KHDxOKUczQjgwqTEdilcxUrF8Tta8a52UFZ0Za1NmC3Mv1c13Mn8UuG4Lg9fKysY=s176-c-k-c0x00ffffff-no-rj"
          />
        </Link>
        <div className="flex flex-col">
          <Link
            href={`https://www.youtube.com/watch?v=${id}`}
            target="_blank"
            className="font-bold"
          >
            {title}
          </Link>
          <Link
            href="https://www.youtube.com/@ProttoyShilpiGoshti"
            target="_blank"
            className="text-gray-500 text-sm"
          >
            Prottoy Shilpi Goshti
          </Link>
          <div className="text-gray-500 text-sm">
            {VIEW_FORMATTER.format(views)} views • {formatTimeAgo(postedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
