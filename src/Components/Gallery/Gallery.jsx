import Navbar from "../Navbar/Navbar"

import gallery from "../../gallery"
const Gallery = () => {
  return (
    <section className="bg-gradient-to-r from-[#ffd7af7a] to-[#965b208e]">
        <div data-aos="fade-in" data-aos-duration="1500" className="max-w-[476px] mx-auto shadow-xl shadow-black bg-background bg-cover bg-no-repeat h-screen overflow-y-scroll">
            <div className="flex justify-center items-center h-screen border-2">
                <div className="w-[90vw] h-[80vh] overflow-scroll mx-auto rounded-xl border-[4px] border-primary">
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