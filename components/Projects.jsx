"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiOutlineCode } from 'react-icons/hi';
import { projects, personalInfo } from '@/data/portfolioData';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">
            What I've built
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto text-center glass rounded-2xl p-10 border-dashed"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400">
              <HiOutlineCode size={26} />
            </div>
            <h3 className="text-white font-display font-semibold text-lg mb-2">
              Projects coming soon
            </h3>
            <p className="text-dark-400 text-sm mb-6">
              I&apos;m currently building out my first projects — this section will fill up soon.
              In the meantime, follow along on GitHub.
            </p>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-dark-700 text-white font-semibold text-sm hover:bg-dark-800/80 hover:border-dark-600 transition-all duration-300"
            >
              <FaGithub size={16} />
              Visit GitHub
            </a>
          </motion.div>
        )}

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
              className="group glass rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-500"
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${idx % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                <div
                  className={`relative overflow-hidden h-64 lg:h-auto ${idx % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark-950/40">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center text-dark-950 hover:scale-110 transition-transform"
                      aria-label={`Visit ${project.title}`}
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-dark-800 border border-dark-600 flex items-center justify-center text-white hover:scale-110 transition-transform"
                      aria-label={`GitHub repo for ${project.title}`}
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>

                <div className={`p-6 sm:p-8 flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-primary-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white font-display font-bold text-xl sm:text-2xl mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-400 text-sm sm:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-dark-800/80 text-dark-300 text-xs font-medium border border-dark-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-400 text-sm font-medium hover:text-primary-300 transition-colors animated-underline"
                    >
                      <FaExternalLinkAlt size={12} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-dark-400 text-sm font-medium hover:text-white transition-colors animated-underline"
                    >
                      <FaGithub size={14} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
