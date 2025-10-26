import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center 
      min-h-screen w-full text-center px-6
      bg-[#D8D4D4] dark:bg-[#566084] bg-cover bg-center overflow-hidden">
      <h1
        className="font-[CaesarDressing]
        bg-gradient-to-b from-[#C40000] to-[#5E0000] 
        bg-clip-text text-transparent drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)]
        leading-none select-none
        text-[225px] md:text-[450px]"
      >
        404
      </h1>
      <div className="w-full max-w-6xl mb-4 
          md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <img
          src="/breadcrumb.gif"
          alt="breadcrumb"
          className=""
          style={{ objectFit: "contain" }}
        />
      </div>
      <h2
        className=" font-[Vazirmatn]
        font-bold text-[#20263C] dark:text-[#FFFFFF]
        text-2xl md:text-5xl mt-16">
        صفحه مورد نظر یافت نشد!
      </h2>
      <p
        className="font-[Vazirmatn]
        font-bold text-[#20263C] dark:text-[#FFFFFF] mt-5 mb-5
        text-lg md:text-2xl max-w-[800px] leading-relaxed">
        احتمالا این صفحه به آدرس دیگری تغییر کرده یا حذف شده است.
      </p>
      <Link
        href="/"
        className="bg-gradient-to-r
         from-red-700 to-red-900 text-white 
         font-semibold rounded-md shadow-lg 
         hover:scale-105 transition-transform duration-300 px-10 py-1 
         text-[4vw] sm:text-[2vw] md:text-[1.2rem]">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
