"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { education, certifications, languages } from '@/data/portfolioData';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding relative bg-dark-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">
            My journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2">
            Education & Training
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h3 className="text-white font-display font-semibold text-lg mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-400" />
              Education
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-dark-700" />

              <div className="space-y-8">
                {education.map((item, i) => (
                  <motion.div
                    key={item.degree}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-2 top-2 w-5 h-5 rounded-full bg-dark-900 border-2 border-primary-500 z-10" />

                    <div className="glass rounded-xl p-5 hover:border-primary-500/30 transition-all duration-300 group">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <h4 className="text-white font-semibold text-base group-hover:text-primary-400 transition-colors">
                            {item.degree}
                          </h4>
                          {item.institution && (
                            <p className="text-dark-400 text-sm mt-1">{item.institution}</p>
                          )}
                          <p className="text-dark-500 text-xs mt-1">📍 {item.location}</p>
                        </div>
                        <span className="px-3 py-1 rounded-lg bg-primary-500/10 text-primary-400 text-xs font-medium whitespace-nowrap">
                          {item.period}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-white font-display font-semibold text-lg mb-8 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-400" />
                Certifications
              </h3>
              {certifications.length > 0 ? (
                certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="glass rounded-xl p-5 hover:border-accent-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{cert.icon}</span>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{cert.title}</h4>
                        <p className="text-dark-400 text-xs mt-1">{cert.issuer}</p>
                        <span className="inline-block px-2 py-0.5 rounded bg-accent-500/10 text-accent-400 text-xs mt-2">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="glass rounded-xl p-5 border-dashed">
                  <p className="text-dark-400 text-sm">
                    None yet — this space will fill up as I complete courses and competitions.
                  </p>
                </div>
              )}
            </motion.div>

            {languages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <h3 className="text-white font-display font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-400" />
                  Languages
                </h3>
                <div className="glass rounded-xl p-5">
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-4 py-2 rounded-lg bg-dark-800/80 text-dark-200 text-sm font-medium border border-dark-700/50 hover:border-primary-500/30 transition-colors"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
