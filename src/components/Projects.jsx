import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaRobot, FaBroadcastTower, FaBuilding } from 'react-icons/fa';
import Tilt from './Tilt';

const projects = [
    {
        number: '01',
        title: 'TNAai',
        subtitle: 'AI-Powered SaaS Platform',
        description:
            'An enterprise-grade AI platform with intelligent chat, RAG-based document retrieval, knowledge management, and automated workflows. Handles thousands of concurrent users with real-time streaming responses.',
        tech: ['NestJS', 'React', 'TypeScript', 'MongoDB', 'OpenAI', 'AWS', 'WebSockets'],
        gradient: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
        icon: <FaRobot />,
        status: 'live',
        links: { live: '#', github: '#' },
    },
    {
        number: '02',
        title: 'FAB Pakistan',
        subtitle: 'Frequency Allocation Board',
        description:
            'National-level spectrum management system for Pakistan\'s Frequency Allocation Board. Features real-time analytics dashboards, automated frequency assignment, and compliance monitoring.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Redux', 'Chart.js'],
        gradient: 'linear-gradient(135deg, #00d4ff, #0ea5e9)',
        icon: <FaBroadcastTower />,
        status: 'live',
        links: { live: '#', github: '#' },
    },
    {
        number: '03',
        title: 'Prop-Log',
        subtitle: 'Property Management System',
        description:
            'A comprehensive property management platform with tenant tracking, maintenance workflows, financial reporting, automated lease management, and integrated payment processing.',
        tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Twilio'],
        gradient: 'linear-gradient(135deg, #ff6b9d, #c084fc)',
        icon: <FaBuilding />,
        status: 'development',
        links: { github: '#' },
    },
];

export default function Projects() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="section projects" id="projects" ref={ref}>
            <div className="container">
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <span className="section-label">Featured Projects</span>
                    <h2 className="section-title">
                        Things I've <span className="gradient-text">built</span>
                    </h2>
                    <p className="section-subtitle">
                        Real-world products that solve real problems — from AI platforms to national-scale systems.
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <motion.div
                            layout
                            key={project.title}
                            initial={{ opacity: 0, y: 60 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Tilt rotationFactor={10} scale={1.02}>
                                <div className="project-card">
                                    <div className="project-card-visual">
                                        <div
                                            className="project-card-gradient"
                                            style={{ background: project.gradient }}
                                        />
                                        <span className="project-icon-large">{project.icon}</span>
                                        <span className="project-card-number">{project.number}</span>
                                        <span className={`project-card-status ${project.status}`}>
                                            {project.status === 'live' ? '● Live' : '◐ In Dev'}
                                        </span>
                                    </div>

                                    <div className="project-card-body">
                                        <h3 className="project-card-title">{project.title}</h3>
                                        <p className="project-card-desc">{project.description}</p>
                                        <div className="project-card-tech">
                                            {project.tech.map((t) => (
                                                <span key={t}>{t}</span>
                                            ))}
                                        </div>
                                        <div className="project-card-links">
                                            {project.links.live && (
                                                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                                    <FiExternalLink /> Live Demo
                                                </a>
                                            )}
                                            {project.links.github && (
                                                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                                    <FiGithub /> Source Code
                                                </a>
                                            )}
                                        </div>
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
