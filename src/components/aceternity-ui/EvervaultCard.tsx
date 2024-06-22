
import { useMotionValue } from "framer-motion";
import  { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "../../utils/cn";
export const EvervaultCard = ({
  img,
  className,
}: {
  img?: string;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    const str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
  <>
    <div
      className={cn(
        "p-0.5  bg-transparent aspect-square    w-full   relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-2/3"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
       <div className="relative z-10 flex items-center justify-center">
  <div className="relative flex items-center justify-center text-white font-bold text-4xl " style={{ width: '200px', height: '200px' }}>
    <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
    <img src={img} alt="anh dep" className="z-20 w-full h-full rounded-full" />
  </div>
</div>
        
      </div>
      <div className=" h-1/3 sm:p-2 w-full flex flex-col items-center">
      <h2 className="text-base md:text-xl font-bold dark:text-white">
        Gemini Pro
      </h2>
      <div className="md:flex justify-between w-full sm:pt-2 px-3">
        <div className="flex items-center flex-row justify-center md:justify-start">
          <div className="font-semibold">~600đ/</div>
          <div className="text-sm opacity-70">1 hình ảnh </div>
        </div>
        <button className="px-2 py-2 md:py-3 border w-full md:w-1/2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
          Try now →
        </button>
      </div>
    </div>
    </div>
      
  </>
    
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CardPattern({ mouseX, mouseY, randomString }: any) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
