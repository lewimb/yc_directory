import Image from "next/image";
import search from "../../public/magnifying_glass.svg";

function Searchbar() {
  return (
    <div className="relative">
      <div className="bg-black p-2 top-5.5 right-8 rounded-full absolute ">
        <Image className="" src={search} alt="magnifying glass" width={20} />
      </div>
      <input
        id="searchbar"
        placeholder="SEARCH STARTUP"
        className="w-[700px] border-[5px] text-black border-black bg-white focus:outline-0 py-5 px-10 text-2xl font-bold rounded-[80px] "
        type="text"
      />
    </div>
  );
}

export default Searchbar;
