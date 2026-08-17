"use client";

import { motion } from 'framer-motion';
import { HiOutlineArrowDown, HiOutlineDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import { personalInfo } from '@/data/portfolioData';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              <span className="text-primary-400 text-sm font-medium">
                Available for opportunities
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4">
              Hi, I&apos;m{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xl sm:text-2xl text-dark-400 font-medium mb-6">
                {personalInfo.role}
              </p>
              <p className="text-dark-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                {personalInfo.tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-dark-950 font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105"
              >
                Say Hello
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              {personalInfo.cv && (
                <a
                  href={personalInfo.cv}
                  download
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-dark-700 text-white font-semibold text-base hover:bg-dark-800/80 hover:border-dark-600 transition-all duration-300 hover:scale-105"
                >
                  <HiOutlineDownload size={18} />
                  Download CV
                </a>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <span className="text-dark-500 text-sm">Find me on</span>
              <div className="h-px w-8 bg-dark-700" />
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800/80 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-700 hover:border-primary-500/30 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800/80 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-700 hover:border-primary-500/30 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl scale-110" />

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary-500/30 glow">
                <Image
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/30 to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 top-1/4 glass px-4 py-2 rounded-xl"
              >
                <span className="text-sm font-semibold text-white">BCA Student</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-4 bottom-1/4 glass px-4 py-2 rounded-xl"
              >
                <span className="text-sm font-semibold text-white">Full Stack Dev</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hidden lg:flex justify-center mt-12"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-dark-500 hover:text-primary-400 transition-colors"
          >
            <span className="text-xs mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <HiOutlineArrowDown size={18} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
