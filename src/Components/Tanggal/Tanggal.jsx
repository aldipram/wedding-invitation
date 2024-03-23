/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { IoIosArrowRoundForward } from "react-icons/io";
import Countdown from '../utils/CountDown/Countdown';

const Tanggal = () => {
  return (
    <section className="bg-gradient-to-r from-[#ffd7af7a] to-[#965b208e]">
        <div data-aos="fade-in" data-aos-duration="1000" className="max-w-[476px] mx-auto bg-background bg-center h-screen bg-no-repeat bg-cover shadow-xl shadow-black">
            <div className='w-[90%] mx-auto flex flex-col justify-center items-center h-screen'>
                <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000">
                    <p className='font-origin text-center'>Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, kami bermaksud mengundang Bapak/Ibu/Saudara/i ke acara pernikahan kami yang insyaAllah akan dilaksanakan pada :
                    </p>
                </div>
            
                <div className='pt-5 flex flex-col gap-5 justify-center items-center font-poppins'>
                    <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="1000" className='text-center'>
                        <p className='pb-2 font-semibold font-origin text-2xl'>Akad</p>
                        <div className='flex gap-5 items-center tracking-widest'>
                            <p className='border-y-2 border-black px-4'>Kamis</p>
                            <p className='text-4xl font-semibold'>11</p>
                            <p className='border-y-2 border-black px-4'>April</p>
                        </div>
                        <p className='text-xl tracking-widest'>2024</p>
                        <p>( 2 Syawal 1445 H )</p>
                        <p>08.00 wib s/d selesai</p>
                    </div>

                    <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="1200" className='text-center'>
                        <p className='pb-2 font-semibold font-origin text-2xl'>Resepsi</p>
                        <p>10.00 wib s/d selesai</p>
                    </div>
                </div>

                <Link data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="1400" to={"/lokasi"} className='flex items-center py-2 px-4 bg-primary rounded-full mt-5 text-white text-lg'>
                    Lokasi <span className='text-3xl'><IoIosArrowRoundForward /></span>
                </Link>

                <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="1500" className='font-origin'>
                    <Countdown />
                </div>
            </div>
            <Navbar />
        </div>
    </section>
  )
}

export default Tanggal