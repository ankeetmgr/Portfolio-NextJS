"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiOutlineCode, HiOutlineAcademicCap, HiOutlineLightningBolt } from 'react-icons/hi';
import Image from 'next/image';
import { personalInfo, achievements } from '@/data/portfolioData';

const stats = [
  { icon: <HiOutlineAcademicCap size={22} />, value: 'BCA', label: 'Pursuing Degree' },
  { icon: <HiOutlineCode size={22} />, value: '6', label: 'Skills Learning' },
  { icon: <HiOutlineLightningBolt size={22} />, value: 'Open', label: 'To Opportunities' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">
            Get to know me
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/about.jpg"
                alt={`${personalInfo.name} working`}
                width={800}
                height={600}
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="glass rounded-xl p-4 text-center hover:border-primary-500/30 transition-all duration-300 group"
                >
                  <div className="text-primary-400 flex justify-center mb-2 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-white font-bold text-lg font-display">
                    {stat.value}
                  </div>
                  <div className="text-dark-400 text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-dark-300 text-base sm:text-lg leading-relaxed mb-6">
              {personalInfo.bio}
            </p>

            {achievements.length > 0 && (
              <div className="space-y-3 mb-8">
                <h3 className="text-white font-semibold text-lg mb-4">
                  Key Achievements
                </h3>
                {achievements.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary-400 shrink-0" />
                    <span className="text-dark-400 text-sm leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass rounded-xl p-4">
                <span className="text-dark-500 text-xs uppercase tracking-wider">Location</span>
                <p className="text-white text-sm mt-1">{personalInfo.location}</p>
              </div>
              <div className="glass rounded-xl p-4">
                <span className="text-dark-500 text-xs uppercase tracking-wider">Email</span>
                <p className="text-white text-sm mt-1 break-all">{personalInfo.email}</p>
              </div>
            </div>

            {personalInfo.cv && (
              <a
                href={personalInfo.cv}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-dark-950 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105"
              >
                Download CV
                <span>↓</span>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
