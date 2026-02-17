import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiCloud, FiDatabase, FiCpu } from 'react-icons/fi';

const highlights = [
    { icon: <FiCode />, text: 'Full Stack Development' },
    { icon: <FiCloud />, text: 'Cloud Architecture (AWS)' },
    { icon: <FiDatabase />, text: 'Database Design & Optimization' },
    { icon: <FiCpu />, text: 'AI/ML Integration' },
];

export default function About() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section className="section about" id="about" ref={ref}>
            <div className="container">
                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, x: -60 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="about-image-frame">
                        <img src="/profile.jpg" alt="Waqas Anjum" />
                    </div>
                </motion.div>

                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: 60 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">
                        Building the future,{' '}
                        <span className="gradient-text">one line at a time</span>
                    </h2>
                    <p className="about-text">
                        I'm Muhammad Waqas Anjum, a passionate Full Stack Developer with 3+ years of hands-on experience
                        in crafting scalable, enterprise-grade applications. I specialize in AI-powered SaaS platforms,
                        leveraging modern technologies like NestJS, React, and AWS to deliver exceptional digital experiences.
                    </p>
                    <p className="about-text">
                        From architecting complex backend systems with microservices to building pixel-perfect
                        interactive frontends, I bring a holistic approach to software development. I thrive on
                        solving challenging problems and continuously pushing the boundaries of what's possible with
                        modern web technologies.
                    </p>

                    <div className="about-highlights">
                        {highlights.map((item, i) => (
                            <motion.div
                                className="about-highlight-item"
                                key={item.text}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                            >
                                <span className="icon">{item.icon}</span>
                                <span>{item.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    <a href="#contact" className="btn-primary">
                        <span>Let's Work Together</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
