import { TypographyH4, TypographyParagraph } from "@/components/ui/typography";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (

    <footer className="bg-slate-800/50 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div>
          <TypographyH4 className="text-white mb-4">About Us</TypographyH4>
          <TypographyParagraph className="w-80 text-white mb-4">
            We specialize in organizing music performances and events that create unforgettable memories.
            From live concerts to intimate gigs, we bring passion to every stage.
          </TypographyParagraph>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <TypographyH4 className="text-white mb-4">Quick Links</TypographyH4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/artists" className="hover:text-yellow-400 transition">
                Artists
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/registrationEvent" className="hover:text-yellow-400 transition">
                Register for Events
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Connect to Us */}
        <div>
          <TypographyH4 className="text-white mb-4">Connect to Us</TypographyH4>
          <TypographyParagraph>
            Follow us on social media to stay updated on the latest events and exclusive offers.
          </TypographyParagraph>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-600"
            >
              <FaYoutube size={30} />
            </a>
          </div>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center">
        <TypographyParagraph className="text-gray-500">
          © {new Date().getFullYear()} MusicWave Events. All Rights Reserved.
        </TypographyParagraph>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://facebook.com"
            className="hover:text-blue-600 transition"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-blue-400 transition"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            className="hover:text-pink-600 transition"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            className="hover:text-blue-700 transition"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
