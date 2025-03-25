import Image from "next/image";
import YCDirectory from "../public/YCDirectory.svg";
import mark from "../public//Marks.svg";
import UserAuth from "./UserAuth";

async function Navbar() {
  return (
    <>
      <nav className="w-screen py-8 px-15 flex items-center justify-between">
        <div className="logo flex">
          <Image src={YCDirectory} alt="Logo" width={160} />
          <Image
            className="relative top-[-8px] right-0"
            src={mark}
            alt="mark"
            width={25}
          />
        </div>
        <div className="links ">
          <UserAuth />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
