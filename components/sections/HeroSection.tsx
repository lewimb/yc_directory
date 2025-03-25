import Searchbar from "../utils/Searchbar";

function HeroSection() {
  return (
    <section className="w-full h-[530px] bg-[#EE2B69]">
      <div className="stripe-background flex flex-col items-center justify-center gap-4 h-[530px]">
        {/* Slogan */}
        <div className="slogan px-5 py-2.5 rounded-md font-bold text-lg bg-[#FBE843] relative">
          <span>PITCH, VOTE, AND GROW</span>
        </div>

        {/* Quotes */}
        <div className="bg-black h-[160px] flex items-center justify-center text-center rounded-md font-extrabold text-[54px] px-5 py-4 text-white">
          PITCH YOUR STARTUP,
          <br />
          CONNECT WITH ENTREPRENEURS
        </div>

        {/* Persuation */}
        <span className="text-xl font-[500px] text-white">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </span>

        {/* Searchbar */}
        <Searchbar />
      </div>
    </section>
  );
}

export default HeroSection;
