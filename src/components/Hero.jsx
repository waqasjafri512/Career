import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiNestjs } from 'react-icons/si';
import ParticleBackground from './ParticleBackground';
import Magnetic from './Magnetic';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

const stats = [
    { number: '1', label: 'Years Experience' },
    { number: '3+', label: 'Projects Delivered' },
    { number: '3+', label: 'Happy Clients' },
];

export default function Hero() {
    return (
        <section className="hero" id="hero">
            {/* Background Effects */}
            <div className="hero-bg-effects">
                <ParticleBackground />
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="hero-orb hero-orb-3" />
                <div className="hero-grid" />
            </div>

            <div className="container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero-badge" variants={itemVariants}>
                        <span className="dot" />
                        Available for projects
                    </motion.div>

                    <motion.h1 className="hero-name" variants={itemVariants}>
                        Waqas
                        <br />
                        <span className="gradient-text">Anjum</span>
                    </motion.h1>

                    <motion.p className="hero-title" variants={itemVariants}>
                        Full Stack Developer — <span className="gradient-text">AI SaaS & Enterprise Platforms</span>
                    </motion.p>

                    <motion.p className="hero-description" variants={itemVariants}>
                        I architect and build robust, scalable web applications powered by modern frameworks and AI technologies. Specializing in NestJS, React, and cloud-native solutions.
                    </motion.p>

                    <motion.div className="hero-buttons" variants={itemVariants}>
                        <Magnetic>
                            <a href="#projects" className="btn-primary">
                                <span>
                                    View My Work <FiArrowRight />
                                </span>
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="/Waqas_Anjum_Resume.pdf" download className="btn-outline">
                                <FiDownload /> Resume
                            </a>
                        </Magnetic>
                    </motion.div>

                    <motion.div className="hero-stats" variants={itemVariants}>
                        {stats.map((stat) => (
                            <div className="hero-stat-item" key={stat.label}>
                                <h3>{stat.number}</h3>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="hero-image-inner">
                        <img src="/profile.jpg" alt="Waqas Anjum" />
                    </div>
                    {/* Floating tech icons */}
                    <motion.div
                        className="hero-float-icon"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ top: '5%', left: '-15%' }}
                    >
                        <FaReact />
                    </motion.div>
                    <motion.div
                        className="hero-float-icon"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        style={{ top: '20%', right: '-10%' }}
                    >
                        <SiNestjs />
                    </motion.div>
                    <motion.div
                        className="hero-float-icon"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                        style={{ bottom: '20%', left: '-20%' }}
                    >
                        <FaNodeJs />
                    </motion.div>
                    <motion.div
                        className="hero-float-icon"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                        style={{ bottom: '5%', right: '-15%' }}
                    >
                        <FaAws />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
