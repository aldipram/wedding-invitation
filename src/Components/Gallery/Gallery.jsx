import Navbar from "../Navbar/Navbar"

import bungaTop from '../../assets/property/bunga1.png'
import gallery from "../../gallery"
const Gallery = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-300">
        <div data-aos="fade-in" data-aos-duration="1500" className="max-w-[476px] mx-auto shadow-xl shadow-black bg-gallery bg-cover bg-no-repeat h-screen overflow-y-scroll">
            <div className="flex justify-center items-center h-screen relative border-2">
                <div className="w-[90vw] h-[80vh] overflow-scroll mx-auto rounded-xl border-[8px] border-[rgb(31,45,85)]">
                    <img src={bungaTop} alt="" className="w-[80vw] absolute top-[-6rem] left-1/2 -translate-x-1/2"/>
                    <div>
                        {gallery.map((item) => (
                            <img key={item.id} src={item.img} alt="img" className="w-full h-full object-cover" />
                        ))}
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    </section>
  )
}

export default Gallery