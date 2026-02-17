import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaPython,
} from 'react-icons/fa';
import {
    SiNestjs, SiTypescript, SiJavascript, SiMongodb, SiPostgresql,
    SiPrisma, SiRedis, SiNextdotjs, SiTailwindcss, SiGraphql,
    SiFirebase, SiExpress,
} from 'react-icons/si';
import Tilt from './Tilt';

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud & DevOps'];

const skills = [
    { name: 'React', icon: <FaReact />, color: '#61dafb', category: 'Frontend' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff', category: 'Frontend' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6', category: 'Frontend' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06b6d4', category: 'Frontend' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#68a063', category: 'Backend' },
    { name: 'NestJS', icon: <SiNestjs />, color: '#e0234e', category: 'Backend' },
    { name: 'Express', icon: <SiExpress />, color: '#ffffff', category: 'Backend' },
    { name: 'GraphQL', icon: <SiGraphql />, color: '#e535ab', category: 'Backend' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB', category: 'Backend' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248', category: 'Database' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169e1', category: 'Database' },
    { name: 'Prisma', icon: <SiPrisma />, color: '#2D3748', category: 'Database' },
    { name: 'Redis', icon: <SiRedis />, color: '#dc382d', category: 'Database' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#ffca28', category: 'Database' },
    { name: 'AWS', icon: <FaAws />, color: '#ff9900', category: 'Cloud & DevOps' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ed', category: 'Cloud & DevOps' },
    { name: 'Git', icon: <FaGitAlt />, color: '#f05032', category: 'Cloud & DevOps' },
];

export default function Skills() {
    const [active, setActive] = useState('All');
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const filtered = active === 'All' ? skills : skills.filter((s) => s.category === active);

    return (
        <section className="section skills" id="skills" ref={ref}>
            <div className="container">
                <motion.div
                    className="skills-header"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-label">Skills & Technologies</span>
                    <h2 className="section-title">
                        My tech <span className="gradient-text">Stack</span>
                    </h2>
                    <p className="section-subtitle">
                        A comprehensive toolkit spanning frontend, backend, databases, and cloud infrastructure.
                    </p>
                </motion.div>

                <motion.div
                    className="skills-categories"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`skill-category-btn ${active === cat ? 'active' : ''}`}
                            onClick={() => setActive(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                <motion.div className="skills-grid" layout>
                    {filtered.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.05 * i }}
                        >
                            <Tilt rotationFactor={25} scale={1.1}>
                                <div className="skill-card">
                                    <span className="skill-icon" style={{ color: skill.color }}>
                                        {skill.icon}
                                    </span>
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
