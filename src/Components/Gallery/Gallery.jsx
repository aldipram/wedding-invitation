import Navbar from "../Navbar/Navbar"

import img1 from '../../assets/prewed/AIK08191.jpg'
import img2 from '../../assets/prewed/AIK08371.jpg'
import img3 from '../../assets/prewed/AIK08376.jpg'
import img4 from '../../assets/prewed/AIK08265.jpg'

import pict1 from '../../assets/prewed/DSC00206.jpg'
import pict2 from '../../assets/prewed/DSC00185.jpg'
import pict3 from '../../assets/prewed/DSC00175.jpg'
import pict4 from '../../assets/prewed/DSC00227.jpg'

import bungaTop from '../../assets/property/bunga1.png'
const Gallery = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-300">
        <div data-aos="fade-in" data-aos-duration="1500" className="max-w-[476px] mx-auto shadow-xl shadow-black bg-gallery bg-cover bg-no-repeat h-screen overflow-y-scroll">
            <div className="flex justify-center items-center h-screen relative border-2">
                <div className="w-[90vw] h-[80vh] overflow-scroll mx-auto rounded-xl border-[10px] border-[rgb(31,45,85)]">
                    <img src={bungaTop} alt="" className="w-[80vw] absolute top-[-6rem] left-1/2 -translate-x-1/2"/>
                    <div>
                        <img src={pict1} alt="pict1" className="img1"/>
                        <img src={pict2} alt="pict2" className="img2"/>
                        <img src={pict3} alt="pict3" className="img3"/>
                        <img src={pict4} alt="pict4" className="img4"/>
                        <img src={img1} alt="img1" className="div1"/>
                        <img src={img2} alt="img2" className="div2"/>
                        <img src={img3} alt="img3" className="div3"/>
                        <img src={img4} alt="img4" className="div4"/>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    </section>
  )
}

export default Gallery