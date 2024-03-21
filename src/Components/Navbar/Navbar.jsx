import { Link } from "react-router-dom"

import { GrNotes, GrMapLocation } from "react-icons/gr";
import { MdPeopleOutline } from "react-icons/md";
import { BsCalendarHeart } from "react-icons/bs";
import { TbPhotoHeart } from "react-icons/tb";
import Button from "../Template/Button";

const Navbar = () => {
  return (
    <section className="fixed bottom-0 left-1/2 -translate-x-1/2 p-5">
        <div className="flex justify-center gap-5 text-2xl bg-[rgb(133,178,255)] mx-auto p-3 rounded-xl">
            <Link to={"/sambutan"}>
                <Button>
                    <GrNotes />
                </Button>
            </Link>
            <Link to={"/mempelai"}>
                <Button>
                    <MdPeopleOutline />
                </Button>
            </Link>
            <Link to={"/tanggal"}>
                <Button>
                    <BsCalendarHeart />
                </Button>
            </Link>
            <Link to={"/lokasi"}>
                <Button>
                    <GrMapLocation />
                </Button>
            </Link>
            <Link to={"/gallery"}>
                <Button>
                    <TbPhotoHeart />
                </Button>
            </Link>

            
        </div>
    </section>
  )
}

export default Navbar