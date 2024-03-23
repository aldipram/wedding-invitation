import Navbar from "../Navbar/Navbar";

const Mempelai = () => {
  return (
    <section className="bg-gradient-to-r from-[#ffd7af7a] to-[#965b208e]">
      <div data-aos="fade-in" data-aos-duration="1000" className="max-w-[476px] mx-auto bg-background h-screen bg-no-repeat bg-cover bg-center shadow-xl shadow-black">
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center text-center gap-5 h-screen">
            <div data-aos="fade-up" data-aos-anchor-placement="bottom-center" data-aos-duration="1500" className="flex flex-col">
              <p className="font-playfair text-2xl font-semibold whitespace-nowrap text-primary tracking-wide">
                Ade Sindi Sriandini, S.Ak.
              </p>
              <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1500">
                <span className="text-[10px] font-poppins">putri dari</span>
                <p className="text-[12px] font-origin">
                  Bpk. Sugiyanto (Alm) & Ibu Aam Sarnimah
                </p>
                <p className="text-[12px] font-origin">Blok Sarimukti RT 01 RW 01 Desa Cintaasih <br /> Kec. Cingambul Kab. Majalengka</p>
              </div>
            </div>
            <span data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="text-5xl font-origin text-primary">
              &
            </span>
            <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" data-aos-duration="1500" className="pb-[3rem]">
              <p className="font-playfair text-2xl font-semibold text-primary tracking-wide">
                Ruhiyat Hidayat
              </p>
              <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1500">
                <span className="text-[10px] font-poppins">putra dari</span>
                <p className="text-[12px] font-origin">
                  Bpk. Odin & Ibu Encop Mulyawati
                </p>
                <p className="text-[12px] font-origin">Blok Desa RT 03 RW 02 Desa Cibeureum <br /> Kec.Talaga Kab. Majalengka</p>
              </div>
            </div>
        </div>
        <Navbar />
      </div>
    </section>
  );
};

export default Mempelai;
