/* eslint-disable react/no-unescaped-entities */
import Navbar from '../Navbar/Navbar'
import bismillah from '../../assets/property/bismillah.png'
const Sambutan = () => {
  return (
    <section className="bg-gradient-to-r from-[#ffd7af7a] to-[#965b208e]">
      <div className="max-w-[476px] mx-auto shadow-xl shadow-black">
        <div data-aos="fade-in" data-aos-duration="1000" className="bg-background bg-repeat-y bg-cover py-[50px] sm:h-screen bg-center">
            <img data-aos="fade-down" data-aos-duration="1000" src={bismillah} alt="" className='h-[50px] mx-auto'/>
          <div className='w-[90%] mx-auto font-origin'>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className='flex flex-col text-center gap-3'>
              <p>"Dan segala sesuatu Kami ciptakan berpasang-pasangan supaya kamu mengingat kebesaran Allah"</p>
              <p>QS. Az-Zariyat : 49</p>
            </div>
            <div data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="300" className="bg-[#CBAD8D] shadow-md shadow-black rounded-br-[50px] rounded-tl-[50px] p-[2rem] my-5 font-poppins">
              <p>Assalamualaikum warahmatullahi wabarakatuh.</p>
              <p className='py-4'>Segala puji bagi Allah yang telah menciptakan makhluk-Nya berpasang-pasangan</p>
              <p>Bahagia rasanya apabila anda berkenan hadir dan memberikan doa restu kepada kami. Kami mengundang anda untuk hadir dalam acara resepsi pernikahan kami.</p>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" className='flex flex-col text-center gap-3 pb-[3rem]'>
              <p>
                "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa nyaman kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir"
              </p>
              <p>QS. Ar-Rum : 21</p>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </section>
  )
}

export default Sambutan