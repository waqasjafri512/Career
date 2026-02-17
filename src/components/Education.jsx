import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap } from 'react-icons/fa';
import Tilt from './Tilt';

const education = [
    {
        university: 'Minhaj University Lahore',
        degree: 'Bachelors of Computer Science',
        grade: '3.40 CGPA',
        period: '2020 — 2024', // Assuming standard 4 year period or similar
        description: 'Focused on software engineering, data structures, and modern web technologies. Participated in various technical workshops and hackathons.',
    }
];

export default function Education() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section className="section education" id="education" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-label">Academic Journey</span>
                    <h2 className="section-title">
                        My <span className="gradient-text">Education</span>
                    </h2>
                </motion.div>

                <div className="education-grid">
                    {education.map((item, i) => (
                        <motion.div
                            key={item.university}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: i * 0.2 }}
                        >
                            <Tilt rotationFactor={5} scale={1.02}>
                                <div className="glass-card education-card">
                                    <div className="education-icon">
                                        <FaGraduationCap />
                                    </div>
                                    <div className="education-details">
                                        <span className="education-period">{item.period}</span>
                                        <h3 className="education-uni">{item.university}</h3>
                                        <p className="education-degree">{item.degree}</p>
                                        <p className="education-grade">Grade: <span className="accent">{item.grade}</span></p>
                                        <p className="education-desc">{item.description}</p>
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
