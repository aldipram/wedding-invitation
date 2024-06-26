import Navbar from "../Navbar/Navbar";
import Clipboard from "../utils/ClipBoard/Clipboard";
import Maps from "../utils/Maps/Maps";

const Lokasi = () => {
  return (
    <section className="bg-gradient-to-r from-[#ffd7af7a] to-[#965b208e]">
      <div className="max-w-[476px] mx-auto shadow-xl shadow-black">
        <div data-aos="fade-in" data-aos-duration="1000" className="bg-background h-screen bg-no-repeat bg-cover bg-center">
          <div className="flex flex-col items-center p-5 h-screen">
            <p data-aos="fade-up" data-aos-duration="1000" className="font-origin text-xl py-5 text-primary">Lokasi/Maps</p>
            <div className="flex flex-col items-center gap-5">
                <div data-aos="flip-up" data-aos-duration="1000" data-aos-delay="1000" className="w-full rounded-xl overflow-hidden">
                    <Maps />
                </div>
                    <a
                        href="https://maps.app.goo.gl/g3q3EnyjvQ2uz7kW8"
                        target="_blank"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="1000"
                    >
                        <button className="font-poppins font-semibold text-white py-2 px-4 bg-primary rounded-md tracking-wider">
                        Lihat Peta
                        </button>
                    </a>

                <div data-aos="flip-down" data-aos-duration="1000" data-aos-delay="1000" className="bg-[#ffffff] p-5 rounded-tr-[3rem] rounded-bl-[2rem] font-origin">
                    atau
                    <Clipboard />
                </div>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </section>
  );
};

export default Lokasi;
