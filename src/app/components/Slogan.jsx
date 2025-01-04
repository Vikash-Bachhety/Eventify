import { TypographyH1, TypographyH2, TypographyParagraph } from "@/components/ui/typography.jsx";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Slogan() {
  return (
    <section className="py-10 w-full text-white text-center px-10 flex flex-col justify-center items-center">

      <div className="border-b-2 border-sky-200 mb-20"></div>

      <div className="container mx-auto px-4 ">
        {/* Slogans Section */}
        <TypographyH1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Experience the Rhythm, Live the Moment
        </TypographyH1>
        <TypographyH2 className="text-2xl md:text-3xl font-semibold mb-4">
          Be Part of Something Extraordinary
        </TypographyH2>
        <TypographyParagraph className="text-lg md:text-xl font-light mb-8">
          Join us for unforgettable music performances that bring energy, passion, and creativity
          to life. Don't miss the chance to create memories that will last a lifetime!
        </TypographyParagraph>

        {/* Stylish Registration Button */}
        <Button className="relative overflow-hidden bg-rose-600 text-white px-6 py-5 rounded-md group">
          <Link href="/registrationEvent"><span className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            <span className="relative z-10"> Register for an Event</span></Link>
        </Button>
      </div>
      <div className="w-full md:w-[80%] flex flex-col items-center gap-10 md:space-x-5 justify-evenly mt-20 md:flex-row">
        <iframe width="90%" height="315" src="https://www.youtube.com/embed/CWQdO3S_bVA?si=D8Pr2TCMH-HvZZ3Y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe width="90%" height="315" src="https://www.youtube.com/embed/ECTheIF2Gv4?si=WziiwrE3L_iTAIWS" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </section>
  );
}
