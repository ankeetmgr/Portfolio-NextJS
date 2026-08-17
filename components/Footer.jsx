import { FaGithub, FaLinkedinIn, FaHeart } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { personalInfo } from '@/data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-800/50 bg-dark-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-4 w-full">
          <div className="text-center md:text-left">
            <a href="#home" className="group flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-dark-950 font-bold font-display text-base">
                A
              </div>
              <span className="text-white font-display font-semibold text-lg">
                {personalInfo.name}
              </span>
            </a>
            <p className="text-dark-500 text-sm tracking-wide uppercase">{personalInfo.role}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {['About', 'Skill', 'Project', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link === 'Skill' ? 'skills' : link === 'Project' ? 'projects' : link.toLowerCase()}`}
                className="text-dark-400 text-sm font-medium hover:text-primary-400 transition-colors animated-underline"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex justify-center md:justify-end gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-dark-800/80 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-800 hover:border-primary-500/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-dark-800/80 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-800 hover:border-primary-500/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-11 h-11 rounded-xl bg-dark-800/80 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-800 hover:border-primary-500/30 transition-all duration-300"
              aria-label="Email"
            >
              <HiOutlineMail size={22} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-dark-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-dark-500 text-xs">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-dark-600 text-xs flex items-center gap-1">
            Made with <FaHeart className="text-primary-500" size={10} /> in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
