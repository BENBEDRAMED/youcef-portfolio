import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function AboutContact() {
  return (
    <section id="contact" className="mt-24 mb-20 grid md:grid-cols-2 gap-16">
      <div>
        <p className="text-sm tracking-[0.3em] uppercase text-white/40">
          Contact
        </p>
        <h2 className="mt-4 text-3xl font-light tracking-wide">
          Get in Touch
        </h2>
      </div>

      <div className="text-white/80 space-y-6">
        <a
          href="mailto:youcefsassidz@gmail.com"
          className="flex items-center gap-4 group"
        >
          <FaEnvelope className="text-white/60 group-hover:text-white transition-colors" />
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            youcefsassidz@gmail.com
          </span>
        </a>

        <a
          href="https://wa.me/213676846386"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 group"
        >
          <FaWhatsapp className="text-white/60 group-hover:text-white transition-colors" />
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            +213 676 846 386
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/youcef-sassi-ab041127a"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 group"
        >
          <FaLinkedin className="text-white/60 group-hover:text-white transition-colors" />
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            Youcef Sassi
          </span>
        </a>
      </div>
    </section>
  );
}