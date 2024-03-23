import { Link } from "react-router-dom";
import { MusicContext } from "../../context/MusicContext";
import { useContext } from "react";

import { FaPause, FaPlay } from "react-icons/fa";
import MarqueeText from "../utils/TeksBerjalan/TeksBerjalan";

const HomePage = () => {

  const { isPlaying, togglePlay } = useContext(MusicContext);
  const songTitle = "So This Is Love (feat. ConTejas).mp3";
  
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-300">
      <div data-aos="fade-in" data-aos-duration="1000" className="bg-homePage h-screen bg-no-repeat bg-cover max-w-[476px] mx-auto">
        <div className="flex flex-col items-center justify-center h-screen gap-5 pt-20 shadow-xl shadow-black">
          <h1 data-aos="zoom-in-up" data-aos-duration="1000" className="font-origin text-[20px] font-semibold text-[rgb(61,91,173)]">
            The Wedding of
          </h1>

          <div className="flex flex-col items-center font-amellinda text-3xl sm:text-4xl text-[#000000] gap-3 tracking-wider py-5">
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className="text-5xl">Shindy</p>
            <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="text-xl font-origin">and</span>
            <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" className="text-5xl">Ruhiyat</p>
          </div>

          <Link to="/sambutan">
            <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="font-poppins font-medium text-white py-2 px-4 bg-[rgba(27,64,126,255)] rounded-md tracking-wider">
              Open
            </button>
          </Link>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500" className="flex items-center gap-3 whitespace-nowrap bg-[#f29900] rounded-md p-3 mt-5 w-[50%]">
            <MarqueeText text={songTitle} />
            <button
              onClick={togglePlay}
              className="bg-white rounded-full p-2"
            >
              {isPlaying ? <FaPause className="text-[#f29900]" size={20} /> : <FaPlay className="text-[#f29900]" size={20} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
