import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729271091/2_cj2vpt.png",
  "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729271105/4_lthsux.png",
  "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729271203/scientist_wrpatc.png",
  "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729271152/dead_sandy_d5qn9l.png",
  "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729271168/governor_znu9gw.png",
  "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729271185/farmer_f4goha.png",
  "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729271277/smuggler_ctzxqb.png",
  "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729271232/warden_2_giydtx.png",
  "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729271219/keeper_fnzg85.png",
  "https://res.cloudinary.com/dl6o7cgmp/image/upload/v1729271135/business_man_h2xesa.png",
];
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 3;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};
const Caroussel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden  bg-[#010101]  py-8 w-[800px] max-lg:hidden  ">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

export default Caroussel;

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video shrink-0 rounded-xl bg-neutral-800 object-cover w-[800px] h-[700px]   "
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};
