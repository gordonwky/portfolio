"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { InterestPhoto } from "@/types/interests";

type PhotoCollectionProps = {
  photos: InterestPhoto[];
};

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function tileClassName(emphasis: InterestPhoto["emphasis"]) {
  if (emphasis === "wide") {
    return "min-h-[300px] md:min-h-0 md:col-span-2";
  }

  if (emphasis === "tall") {
    return "min-h-[420px] md:min-h-0 md:row-span-2";
  }

  return "min-h-[320px] md:min-h-0";
}

export default function PhotoCollection({ photos }: PhotoCollectionProps) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-5 md:auto-rows-[260px] md:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {photos.map((photo) => (
        <motion.article
          key={`${photo.title}-${photo.location}`}
          variants={reveal}
          transition={{ duration: 0.7 }}
          className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-black/30 ${tileClassName(photo.emphasis)}`}
        >
          <div className="absolute inset-0">
            <Image
              src={photo.imageSrc}
              alt={photo.imageAlt}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              style={{ objectPosition: photo.objectPosition ?? "center" }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d8a477]">
              {photo.location}
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-cormorant)] text-3xl leading-none text-[#f7f1e8]">
              {photo.title}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#d0c3b5]">
              {photo.note}
            </p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
