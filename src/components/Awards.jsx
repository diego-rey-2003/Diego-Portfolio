import React from 'react';
import { motion } from 'framer-motion';
import { awards } from '../constants';
import { SectionWrapper } from '../hoc';

const AwardCard = ({ title, description, date, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="bg-[#1e1e1e] p-6 rounded-xl shadow-md"
  >
    <h3 className="text-white text-xl font-semibold">{title}</h3>
    <p className="text-gray-300 mt-2">{description}</p>
    <p className="text-sm text-gray-400 mt-1 italic">{date}</p>
  </motion.div>
);

const Awards = () => {
  return (
    <div className="w-full bg-night">
      {/* Title Section */}
      <section className="h-screen flex items-center justify-center">
      <motion.h1
  initial={{ opacity: 0, y: 50, letterSpacing: '-0.05em' }}
  whileInView={{ opacity: 1, y: 0, letterSpacing: '0.2em' }}
  transition={{ duration: 1, ease: 'easeOut' }}
  className="text-white text-[60px] sm:text-[96px] uppercase font-bold"
  style={{ fontFamily: 'Inter, sans-serif' }}
>
  Awards
</motion.h1>

      </section>

      {/* Awards Content */}
      <section className="pt-10 pb-40 px-6 flex flex-col items-center">
        <div className="max-w-5xl w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 uppercase tracking-wider text-sm mb-2"
          >
            Recognition
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-4xl font-bold mb-10"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Awards & Honors
          </motion.h2>

          <div className="flex flex-col gap-8">
            {awards.map((award, index) => (
              <AwardCard key={index} {...award} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionWrapper(Awards, 'awards');
