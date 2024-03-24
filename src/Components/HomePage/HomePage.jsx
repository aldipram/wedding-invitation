import { Link } from "react-router-dom";
import { MusicContext } from "../../context/MusicContext";
import { useContext } from "react";

import { FaPause, FaPlay } from "react-icons/fa";
import MarqueeText from "../utils/TeksBerjalan/TeksBerjalan";


const HomePage = () => {

  const { isPlaying, togglePlay } = useContext(MusicContext);1
  const songTitle = "So This Is Love (feat. ConTejas).mp3";
  
  return (
      <section  data-aos="fade-in" data-aos-duration="1000" className="bg-homePage bg-center bg-no-repeat bg-cover">
        <div className="flex flex-col items-center justify-center h-screen gap-5 pt-20 shadow-xl shadow-black">
          <h1 data-aos="zoom-in-up" data-aos-duration="1000" className="font-poppins text-[20px] font-semibold">
            The Wedding of
          </h1>

          <div className="flex flex-col items-center font-playfair text-bold sm:text-4xl text-primary gap-3 tracking-wider py-5">
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className="text-4xl">Shindy</p>
            <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="text-xl font-poppins">and</span>
            <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" className="text-4xl">Ruhiyat</p>
          </div>

          <Link to="/sambutan">
            <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="font-poppins font-medium text-white py-2 px-4 bg-primary rounded-md tracking-wider">
              Open
            </button>
          </Link>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500" className="flex items-center gap-3 whitespace-nowrap bg-[#000000c5] rounded-md p-2 mt-5 w-[50%]">
            <MarqueeText text={songTitle} />
            <button
              onClick={togglePlay}
              className="bg-white rounded-full p-2"
            >
              {isPlaying ? <FaPause className="text-primary" size={20} /> : <FaPlay className="text-primary" size={20} />}
            </button>
          </div>
        </div>
      </section>
  );
};

export default HomePage;
