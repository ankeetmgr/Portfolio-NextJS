"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/data/portfolioData';

const levelColors = {
  Basic: 'bg-dark-600',
  Intermediate: 'bg-primary-500/70',
  Advanced: 'bg-primary-400',
};

const levelWidths = {
  Basic: 'w-1/3',
  Intermediate: 'w-2/3',
  Advanced: 'w-11/12',
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative bg-dark-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">
            What I know
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.15, duration: 0.6 }}
              className="glass rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-white font-display font-semibold text-lg">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: catIdx * 0.15 + i * 0.08,
                      duration: 0.4,
                    }}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-dark-200 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          skill.level === 'Advanced'
                            ? 'bg-primary-500/20 text-primary-400'
                            : skill.level === 'Intermediate'
                              ? 'bg-accent-500/20 text-accent-400'
                              : 'bg-dark-700 text-dark-400'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1.5 bg-dark-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView
                            ? {
                                width:
                                  skill.level === 'Advanced'
                                    ? '90%'
                                    : skill.level === 'Intermediate'
                                      ? '65%'
                                      : '35%',
                              }
                            : {}
                        }
                        transition={{
                          delay: catIdx * 0.15 + i * 0.08 + 0.3,
                          duration: 0.8,
                          ease: 'easeOut',
                        }}
                        className={`h-full rounded-full ${
                          skill.level === 'Advanced'
                            ? 'bg-gradient-to-r from-primary-500 to-primary-400'
                            : skill.level === 'Intermediate'
                              ? 'bg-gradient-to-r from-primary-600 to-accent-500'
                              : 'bg-dark-600'
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
