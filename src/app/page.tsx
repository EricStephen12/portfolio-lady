"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from 'next/head';
// import { Player } from "@lottiefiles/react-lottie-player";

// SEO Metadata
const metadata = {
  title: "Anny's Chin's - Premium Chin Chin Delights",
  description: "Experience 15+ years of authentic, crunchy Chin Chin. Vanilla, Milk, Coconut, and Cinnamon varieties available for events, gifts, and special occasions.",
  keywords: "Chin Chin, Nigerian snacks, premium Chin Chin, event catering, gift packages, vanilla Chin Chin, milk Chin Chin, coconut Chin Chin, cinnamon Chin Chin",
};

// Font imports
const fontLinks = `
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
`;

const navLinks = [
  { label: "Home", to: "index" },
  { label: "Products", to: "services" },
  { label: "Packages", to: "work" },
  { label: "Testimonials", to: "testimonials" },
  { label: "About", to: "about" },
  { label: "Contact", to: "contact" },
];

// Define type for Featured Work modal
interface FeaturedWorkItem {
  img: string;
  title: string;
  desc: string;
  details: string;
}

function scrollToSection(id: string) {}

function LoadingSplash() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFF8F0] text-[#2C1810]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative"
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-8 drop-shadow-lg font-cormorant"
        >
          Anny's Chin's
        </motion.h1>
        <motion.div
          className="absolute -inset-4 bg-[#8B4513]/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "280px" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="h-2 bg-[#2C1810]/20 rounded-full overflow-hidden shadow-lg mt-8"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="h-2 bg-[#8B4513]"
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-8 text-lg tracking-widest font-montserrat"
      >
        Loading Deliciousness...
      </motion.p>
    </motion.div>
  );
}

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), { ssr: false });

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [navBg, setNavBg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState<FeaturedWorkItem | null>(null);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const onScroll = () => {
  //       setNavBg(window.scrollY > 30);
  //       setMenuOpen(false); // Close menu on scroll
  //     };
  //     window.addEventListener("scroll", onScroll);
  //     return () => window.removeEventListener("scroll", onScroll);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     if (menuOpen) {
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       document.body.style.overflow = "";
  //     }
  //     return () => {
  //       document.body.style.overflow = "";
  //     };
  //   }
  // }, [menuOpen]);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Close menu on navigation
  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  if (showSplash) return <LoadingSplash />;

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <div dangerouslySetInnerHTML={{ __html: fontLinks }} />
      </Head>
      <div className="min-h-screen bg-[#FFF8F0] text-[#2C1810] font-serif">
        {/* Responsive Animated Menu Bar */}
        <motion.nav
          className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 transition-all duration-300 ${navBg ? "bg-[#FFF8F0]/90 shadow-lg border-b border-[#2C1810]/10 backdrop-blur" : "bg-[#FFF8F0]/60"}`}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo with animation */}
          <motion.span
            className="font-bold text-xl sm:text-2xl tracking-tight cursor-pointer select-none font-cormorant"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={() => scrollToSection("index")}
          >
            Anny's Chin's
          </motion.span>
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-4 sm:gap-8 text-base sm:text-lg font-semibold relative">
            {navLinks.map(link => (
              <li key={link.to} className="relative group">
                <button
                  className="px-2 py-1 rounded focus:outline-none focus:text-[#8B4513] whitespace-nowrap transition-colors font-montserrat"
                  onClick={() => handleNavClick(link.to)}
                  aria-label={`Go to ${link.label}`}
                >
                  <span className="relative z-10 group-hover:text-[#8B4513] transition-colors">{link.label}</span>
                  {/* Underline animation */}
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#8B4513] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                    style={{ transition: 'transform 0.3s' }}
                  />
                </button>
              </li>
            ))}
          </ul>
          {/* Hamburger for Mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none relative z-50"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(v => !v)}
          >
            <motion.span
              className="block w-7 h-0.5 bg-black mb-1 rounded-full"
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            <motion.span
              className="block w-7 h-0.5 bg-black mb-1 rounded-full"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-7 h-0.5 bg-black rounded-full"
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </button>
          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-white/95 z-[9999] flex flex-col items-center justify-center md:hidden"
                style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
              >
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08 } },
                  }}
                  className="flex flex-col gap-8 text-2xl font-bold"
                >
                  {navLinks.map((link, idx) => (
                    <motion.li
                      key={link.to}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <button
                        className="px-4 py-2 rounded focus:outline-none focus:text-[#8B4513] whitespace-nowrap hover:text-[#8B4513] transition-colors"
                        onClick={() => handleNavClick(link.to)}
                        aria-label={`Go to ${link.label}`}
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Animated Hero Section with Parallax SVG Background */}
        <motion.section id="index" initial="visible" animate="visible" className="relative overflow-hidden pt-32 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-8 max-w-6xl mx-auto border-b border-black/10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center">
          {/* Animated SVG background shapes */}
          <motion.svg
            className="absolute -top-24 -left-24 w-[400px] h-[400px] opacity-30 z-0"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            <circle cx="200" cy="200" r="180" fill="#e11d48" />
          </motion.svg>
          <motion.svg
            className="absolute -bottom-32 -right-32 w-[300px] h-[300px] opacity-20 z-0"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            <rect x="50" y="50" width="200" height="200" rx="100" fill="#2563eb" />
          </motion.svg>
          <div className="relative z-10 col-span-1 md:col-span-7 flex flex-col gap-6">
            {/* Animated headline text (split-reveal) */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-extrabold leading-tight mb-2 tracking-tight font-cormorant editorial-headline"
            >
              {"Anny's Chin's — Premium Chin Chin".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: 40, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { type: "spring", duration: 0.7 } },
                  }}
                  style={{ display: char === " " ? "inline-block" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl max-w-3xl font-light mb-6 sm:mb-8 font-montserrat"
            >
              Over 15 years of experience crafting original homey taste and crunchy quality. Nationwide and international recognition for premium Chin Chin.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0 0 0 4px #8B4513aa" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-[#8B4513] text-[#FFF8F0] font-bold shadow-lg transition-colors text-lg font-montserrat"
              onClick={() => scrollToSection("contact")}
              aria-label="Book a Service"
            >
              Book a Service
            </motion.button>
          </div>
          {/* SVG/Lottie Animation Placeholder */}
          <div className="relative z-10 col-span-1 md:col-span-5 flex justify-center items-center h-full">
            <Player
              autoplay
              loop
              src="/Animation - 1747000136794.json"
              style={{ height: "16rem", width: "16rem", background: "none" }}
              className="drop-shadow-xl"
            />
          </div>
        </motion.section>

        {/* Services Section with animated cards */}
        <motion.section id="services" initial="visible" animate="visible" className="py-16 sm:py-24 px-4 sm:px-8 max-w-6xl mx-auto border-b border-[#2C1810]/10">
          <motion.div initial="visible" animate="visible">
            <h2 className="text-2xl sm:text-4xl font-bold mb-8 font-cormorant">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
                title: "Vanilla Flavoured Chinchin",
                desc: "Delight in our classic vanilla-flavored Chin Chin, perfect for any occasion. Available in small and large sizes with beautiful packaging options."
              }, {
                title: "Milk Flavoured Chinchin",
                desc: "Experience the rich, creamy taste of our milk-flavored Chin Chin. A favorite for events and gift packages, available in various sizes."
              }, {
                title: "Coconut & Cinnamon Varieties",
                desc: "Choose from our premium coconut flakes, coconut-flavored, and cinnamon Chin Chin with sugar-crusted nuts. Each variety comes in special packaging."
              }].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  whileHover={{ scale: 1.04, boxShadow: "0 4px 24px 0 #8B4513aa" }}
                  className="bg-[#FFF8F0] border border-[#2C1810]/10 rounded-2xl p-6 flex flex-col gap-4 shadow-sm"
                >
                  <h3 className="text-xl font-bold font-cormorant mb-2">{item.title}</h3>
                  <p className="text-base font-montserrat text-[#2C1810]/80">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Interactive Gallery/Work Section with tilt/glow on hover and modal popup */}
        <motion.section id="work" initial="visible" animate="visible" className="py-16 sm:py-24 px-0 border-b border-black/10 bg-[#fafafa] relative overflow-x-auto">
          <h2 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 font-serif px-4 sm:px-8">Featured Work</h2>
          <motion.p className="text-base sm:text-lg font-sans mb-8 px-4 sm:px-8 max-w-2xl">A selection of recent projects, events, and collaborations. Each one is a story of creativity, passion, and connection.</motion.p>
          <motion.div initial="visible" animate="visible" className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10 px-4 sm:px-8 pb-8 items-stretch justify-center">
            {[
              {
                img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400",
                title: "Special Baskets & Bowls",
                desc: "Elegant packaging options in big and small sizes, perfect for events and gifts.",
                details: "Our special baskets and bowls come with beautiful overlays and personalized inscriptions, making them perfect for any occasion."
              },
              {
                img: "https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&w=400",
                title: "Custom Glass Jars",
                desc: "Premium glass jars available in various sizes, sealed and branded with your personal touch.",
                details: "Each jar is carefully designed with overlays and sealed for freshness, featuring personalized inscriptions for that special touch."
              },
              {
                img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=400",
                title: "Event Packages",
                desc: "Complete Chin Chin packages for events, including the 2025 Psalm 23 celebration.",
                details: "Special 5% discount per table, with flexibility to mix and match varieties. Branding included in pricing."
              },
              {
                img: "https://cdn.pixabay.com/photo/2016/11/29/09/32/adult-1868750_1280.jpg",
                title: "Gift Packages",
                desc: "Beautifully packaged Chin Chin for surprise parties and special occasions.",
                details: "Choose from our variety of flavors and packaging options to create the perfect gift package."
              },
              {
                img: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400",
                title: "Corporate Orders",
                desc: "Bulk orders for corporate events and celebrations with special pricing.",
                details: "Competitive pricing for large orders, with nationwide and international delivery options."
              }
            ].map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                whileHover={{ scale: 1.06, rotate: 2, boxShadow: "0 8px 32px 0 #2563eb55, 0 0 0 4px #e11d48aa" }}
                className="bg-white border border-black/10 rounded-3xl p-4 xs:p-6 sm:p-8 w-full sm:w-[340px] md:w-[370px] max-w-full sm:max-w-xs md:max-w-sm shadow-md transition-all cursor-pointer group relative flex flex-col whitespace-normal break-words"
              >
                <img src={item.img} alt={item.title} className="w-full h-40 xs:h-48 sm:h-56 object-cover rounded-xl mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold font-serif mb-2 text-center break-words whitespace-normal">{item.title}</h3>
                <p className="text-sm sm:text-base font-sans text-gray-700 mb-4 text-center break-words whitespace-normal">{item.desc}</p>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  whileHover={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden text-xs sm:text-sm text-gray-600 bg-gray-50 rounded p-2 mb-2 text-center break-words whitespace-normal"
                >
                  {item.details}
                </motion.div>
                <span
                  className="text-xs font-mono text-[#e11d48] uppercase tracking-widest cursor-pointer underline text-center"
                  onClick={() => setModal(item)}
                >
                  Click to explore
                </span>
              </motion.article>
            ))}
          </motion.div>
          {/* Modal Popup */}
          <AnimatePresence>
            {modal && (
              <motion.div
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur"
                onClick={() => setModal(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, y: 60, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  exit={{ scale: 0.8, y: 60, opacity: 0 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-w-[95vw] max-h-[90vh] p-4 sm:p-8 md:p-12 relative flex flex-col items-center overflow-y-auto"
                  style={{ boxSizing: 'border-box' }}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-[#e11d48] font-bold focus:outline-none"
                    onClick={() => setModal(null)}
                    aria-label="Close modal"
                  >
                    &times;
                  </button>
                  <img src={modal.img} alt={modal.title} className="w-full h-40 xs:h-56 sm:h-64 object-cover rounded-xl mb-4" />
                  <h3 className="text-2xl font-bold font-serif mb-2 text-center break-words whitespace-normal">{modal.title}</h3>
                  <p className="text-base font-sans text-gray-700 mb-2 text-center break-words whitespace-normal">{modal.desc}</p>
                  <p className="text-sm font-sans text-gray-600 text-center break-words whitespace-normal">{modal.details}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* Testimonials Carousel */}
        <motion.section id="testimonials" initial="visible" animate="visible" className="py-16 sm:py-24 px-4 sm:px-8 max-w-4xl mx-auto border-b border-black/10">
          <motion.div initial="visible" animate="visible">
            <h2 className="text-2xl sm:text-4xl font-bold mb-8 font-serif">Testimonials</h2>
            <TestimonialsCarousel />
          </motion.div>
        </motion.section>

        {/* About Section - Responsive, Animated with pop/wiggle on skill tags */}
        <motion.section id="about" initial="visible" animate="visible" className="py-16 sm:py-24 px-4 sm:px-8 max-w-5xl mx-auto border-b border-black/10">
          <motion.div initial="visible" animate="visible">
            <h2 className="text-2xl sm:text-4xl font-bold mb-8 font-serif">About</h2>
            <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
              <motion.img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Anny profile"
                className="w-32 h-32 sm:w-52 sm:h-52 rounded-3xl object-cover border-2 border-black/10 shadow-md mb-6 md:mb-0"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />
              <div className="flex-1">
                <h3 className="text-lg sm:text-2xl font-bold mb-4 font-serif">A Legacy of Quality</h3>
                <p className="text-base sm:text-lg font-sans mb-4">With over 15 years of experience, Anny's Chin's has established itself as a leader in premium Chin Chin production. Our commitment to original homey taste and crunchy quality has earned us nationwide and international recognition.</p>
                <p className="text-base sm:text-lg font-sans mb-4">We take pride in offering a variety of flavors and packaging options, ensuring that every customer finds their perfect match. From events to gift packages, we deliver excellence in every bite.</p>
                <div className="flex flex-wrap gap-2 sm:gap-4 mt-4">
                  {["Vanilla", "Milk", "Coconut", "Cinnamon"].map((tag, i) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.15, rotate: i === 1 ? -6 : 6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      className="px-4 sm:px-5 py-2 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest cursor-pointer"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Contact Section - Responsive, Animated with fade-in from bottom */}
        <motion.section id="contact" initial="visible" animate="visible" className="py-16 sm:py-24 px-4 sm:px-8 max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 font-serif">Contact</h2>
            <div className="bg-[#FFF8F0] p-6 sm:p-8 rounded-2xl shadow-lg border border-[#2C1810]/10 flex flex-col gap-4 text-base sm:text-lg font-montserrat">
              <p>Ready to place an order or discuss your event needs? Contact us for premium Chin Chin packages and special offers.</p>
              <p>Phone: <a href="tel:+23438918620" className="text-[#8B4513] underline">+234 8138918620</a></p>
              <p>KC Handle: <a href="#" className="text-[#8B4513] underline">@stephenannette</a></p>
              <p>Email: <a href="mailto:tinlprojectsltd@gmail.com" className="text-[#8B4513] underline">tinlprojectsltd@gmail.com</a></p>
            </div>
          </motion.div>
        </motion.section>

        {/* Footer - Responsive with fade-in */}
        <footer className="text-center py-8 sm:py-10 text-gray-500 border-t border-black/10 mt-10 text-xs sm:text-base">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            &copy; {new Date().getFullYear()} Anny's Chin's (by Tinl Ltd RC 1220072). Crafted with ❤️.
          </motion.p>
        </footer>
      </div>
    </>
  );
}

// TestimonialsCarousel component (add at the bottom of the file)
function TestimonialsCarousel() {
  const testimonials = [
    { quote: "Anny's Chin Chin is the best I've ever tasted! The vanilla flavor is simply divine.", author: "Sarah, Event Planner" },
    { quote: "The packaging is beautiful and the taste is consistently amazing. Perfect for gifts!", author: "Michael, Regular Customer" },
    { quote: "Their coconut-flavored Chin Chin is a hit at every party. Highly recommended!", author: "Tolu, Party Host" },
    { quote: "Professional service and premium quality. The cinnamon variety is my favorite!", author: "David, Corporate Client" },
  ];
  const [currentIdx, setCurrentIdx] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCurrentIdx((i) => (i + 1) % testimonials.length), 4000);
    return () => clearTimeout(timer);
  }, [currentIdx, testimonials.length]);
  return (
    <div className="relative w-full flex flex-col items-center">
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={currentIdx}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm w-full text-center"
        >
          <p className="text-lg font-sans mb-2">&quot;{testimonials[currentIdx].quote}&quot;</p>
          <footer className="text-xs text-gray-500">— {testimonials[currentIdx].author}</footer>
        </motion.blockquote>
      </AnimatePresence>
      <div className="flex gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${i === currentIdx ? "bg-[#e11d48]" : "bg-gray-300"}`}
            onClick={() => setCurrentIdx(i)}
            aria-label={`Show testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
