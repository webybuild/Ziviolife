import { motion } from "framer-motion";
import { Target, Compass, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="w-full overflow-hidden text-black bg-white">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center p-10 text-white md:p-20 bg-gradient-to-br from-black via-gray-900 to-gray-800"
        >
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">About Zivio</h1>
          <p className="max-w-lg text-lg text-gray-300">
            We create lighting solutions that go beyond illumination, combining
            innovation and design to transform spaces with efficiency and
            impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
            alt="About Hero"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </section>

      {/* Company Story Section */}
      <section className="px-6 py-20 bg-white md:px-20">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <motion.img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt="Company Story"
            className="object-cover shadow-lg rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold">
              Zivio, the art of transformation.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Since 2018, Zivio has been reimagining how lighting blends with
              architecture and daily life. We deliver premium lighting
              experiences by merging functionality with aesthetics, ensuring
              spaces that inspire and perform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="px-6 py-20 md:px-20 bg-gray-50">
        <h2 className="mb-12 text-4xl font-bold text-center">
          Mission. Vision. Values.
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "Mission",
              icon: <Target size={40} />,
              text: "To empower with innovative lighting that transforms spaces beautifully.",
            },
            {
              title: "Vision",
              icon: <Compass size={40} />,
              text: "To lead globally in lighting design and sustainable solutions.",
            },
            {
              title: "Values",
              icon: <Rocket size={40} />,
              text: "Craftsmanship, integrity, and customer-first innovation.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-8 text-center transition bg-white shadow-lg rounded-2xl hover:shadow-2xl"
            >
              <div className="flex justify-center mb-4 text-black">
                {card.icon}
              </div>
              <h3 className="mb-2 text-2xl font-semibold">{card.title}</h3>
              <p className="text-gray-600">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Statement Section */}
      <section className="px-6 py-20 text-center bg-white md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-4xl font-bold leading-snug"
        >
          We craft lighting that goes beyond illumination, combining innovation
          and design to transform spaces with lasting impact.
        </motion.h2>
      </section>

      {/* Team Section */}
      <section className="px-6 py-20 md:px-20 bg-gray-50">
        <h2 className="mb-12 text-4xl font-bold text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
            "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative overflow-hidden shadow-lg group rounded-2xl"
            >
              <img
                src={src}
                alt="Team Member"
                className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition duration-500 bg-black opacity-0 bg-opacity-60 group-hover:opacity-100">
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-300">Creative Director</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 text-center text-white bg-black">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-4xl font-bold"
        >
          Let’s shape the future of lighting together.
        </motion.h2>
        <button className="px-8 py-4 text-lg text-black transition bg-white rounded-full hover:bg-gray-200">
          Contact Us
        </button>
      </section>
    </div>
  );
}
