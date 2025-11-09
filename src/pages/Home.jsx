import mandala from "../assets/hero-mandala.svg";
import bgTexture from "../assets/BG.png";
import bgOverlay from "../assets/BG-1.png";
import logo from "../assets/v-films-logo.svg";

export default function Home() {
  return (
    <div
      className="relative min-h-screen overflow-hidden text-white font-instrument"
      style={{
        backgroundColor: "#0F3255",
        backgroundImage: `url(${bgOverlay}), url(${bgTexture})`,
        backgroundSize: "100% 100%, 100% 100%",
        backgroundPosition: "center center, center center",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-8 md:px-20">
        <div className="relative flex flex-col items-center md:items-start md:w-1/2 -mt-6">
          <img src={mandala} alt="Mandala" className="w-[280px] md:w-[405px] opacity-90" />
          <img
            src={logo}
            alt="V Films"
            className="absolute top-1/2 md:top-[45%] left-1/2 md:left-[30%] -translate-x-1/2 -translate-y-1/2 w-[220px] md:w-[308px]"
          />
        </div>

        <div className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start mt-6 md:mt-0">
          <h1 className="font-island text-[44px] md:text-[78px] leading-tight text-[#0F3255]">
            Varnan is where stories <br /> find their voice and form
          </h1>

          <h2 className="mt-3 text-[#F15D2B] font-halant text-[24px] md:text-[33px]">
            Films . Brands . Art
          </h2>

          <p className="mt-6 text-[#252729] font-instrument text-[13px] md:text-[15px] max-w-[487px] text-center md:text-left leading-snug">
            Since 2009, V’ve been telling stories — stories of people, their journeys, and the places that shape them. Some begin in polished boardrooms, others in humble village squares. But every story starts the same way — by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters. V doesn’t just tell stories — V honors them.
          </p>
        </div>
      </section>
    </div>
  );
}
