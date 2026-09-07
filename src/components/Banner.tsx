import BannerImage from "../assets/banner-main.png";
import BgShadow from "../assets/bg-shadow.png";

const Banner = () => {
  return (
    <section className="px-4 py-5">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#101010] shadow-xl">
        <img
          src={BgShadow}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 flex min-h-[350px] flex-col items-center justify-center text-center">
          <img
            src={BannerImage}
            alt="Cricket"
            className="w-[150px] sm:w-[170px] md:w-[190px]"
          />

          <h1 className="mt-3 px-4 text-xl font-bold text-white sm:text-2xl md:text-3xl">
            Assemble Your Ultimate Cricket Team
          </h1>

          <p className="mt-2 px-4 text-xs text-gray-400 sm:text-sm">
            Build your dream team and compete with the best
          </p>

          <button
            className="
              mt-5
              rounded-md
              bg-lime-400
              px-5
              py-2
              text-sm
              font-bold
              text-black
              shadow-md
              transition
              duration-300
              hover:scale-105
              hover:bg-lime-300
            "
          >
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
