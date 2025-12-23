"use client";

import FadeInSection from "@/components/fade-in";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      {/* HERO */}
      <section
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden
bg-[radial-gradient(ellipse_at_top,_#E6C77B_0%,_#4E342E_55%,_#3B2622_100%)]"
      >
        <h1 className="text-5xl md:text-7xl font-serif text-[#F7E7B4] mb-4">
          Yinka & Uzochukwu
        </h1>

        <p className="text-xl text-[#FFFDF8] opacity-90">#YuForever2026 💍</p>

        <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#E6C77B]">
          January 10, 2026 • Lagos, Nigeria
        </p>
      </section>

      {/* OUR STORY */}
      <FadeInSection>
        <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-serif mb-4 text-[#C9A85C] drop-shadow-[0_0_12px_rgba(201,168,92,0.25)]">
              Our Story
              <div className="w-20 h-0.5 bg-[#E6C77B] mb-6" />
            </h2>

            <p className="text-[#D8CFC4] leading-relaxed mb-6">
              We were in need of a UI/UX designer… little did I know I was
              reviewing the application of my future wife. What started as
              simple work conversations slowly became something neither of us
              expected — love.
            </p>

            <motion.a
              href="/images/our-story-card.JPG"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full
  bg-[#4E342E] text-[#F7E7B4]"
            >
              Read Our Full Story
            </motion.a>
          </div>

          {/* IMAGE */}
          <Image
            src="/images/our-story2.JPEG"
            alt="Our story"
            width={500}
            height={600}
            className="rounded-2xl object-cover shadow-lg"
          />
        </section>
      </FadeInSection>

      {/* MEMORIES GRID */}
      <FadeInSection>
        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-4 text-[#C9A85C] drop-shadow-[0_0_12px_rgba(201,168,92,0.25)] text-center">
            Our Memories
            <div className="w-20 h-0.5 bg-[#E6C77B] mb-6 mx-auto" />
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="columns-2 md:columns-3 gap-4 space-y-4"
          >
            {["1.JPG", "2.jpg", "3.JPG", "4.JPEG", "5.JPEG", "6.JPG"].map(
              (img, index) => (
                <motion.div
                  key={img}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="overflow-hidden rounded-xl"
                >
                  <Image
                    src={`/images/memories${img}`}
                    alt=""
                    width={400}
                    height={500}
                    className="w-full rounded-xl"
                  />
                </motion.div>
              )
            )}
          </motion.div>
        </section>
      </FadeInSection>

      {/* INVITATION */}
      <FadeInSection>
        <section className="px-6 text-center">
          <h2 className="text-3xl font-serif mb-4 text-[#C9A85C] drop-shadow-[0_0_12px_rgba(201,168,92,0.25)] text-center">
            Wedding Invitation
            <div className="w-20 h-0.5 bg-[#E6C77B] mb-6 mx-auto" />
          </h2>

          <div className="max-w-md mx-auto p-8 border rounded-2xl bg-white shadow text-[#1e293b]">
            <p className="uppercase tracking-widest text-sm mb-4 text-[#1e293b]">
              You're Invited
            </p>
            <h3 className="text-2xl font-serif mb-2 text-[#1e293b]">
              Yinka & Uzochukwu
            </h3>
            <p>January 10, 2026</p>
            <p>Lagos, Nigeria</p>
          </div>

          <motion.a
            href="/images/invitation-card.JPG"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full
  bg-rose-600 text-white mt-6"
          >
            Download Invitation
          </motion.a>
        </section>
      </FadeInSection>

      {/* GIFTS */}
      <FadeInSection>
        <section className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-4 text-[#C9A85C] drop-shadow-[0_0_12px_rgba(201,168,92,0.25)] text-center">
            Love Gifts
            <div className="w-20 h-0.5 bg-[#E6C77B] mb-6 mx-auto" />
          </h2>
          <p className="text-[#D8CFC4] mb-6">
            Your presence at our wedding is the greatest gift of all. However,
            if you wish to honor us with a gift, you are encouraged to monetize
            it.
          </p>

          <div className="bg-gray-50 p-6 rounded-xl text-[#1e293b]">
            <p className="font-medium">Olayinka Rachael Ayodele</p>
            <p>Access Bank • 1380907833</p>
          </div>
        </section>
      </FadeInSection>

      {/* FOOTER */}
      <footer className="text-center py-12 text-sm text-[#D8CFC4]">
        {/* Made with ❤️ for our forever */}
        #YuForever2026 ❤️
      </footer>
    </main>
  );
}
