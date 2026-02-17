import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
    {
        date: '2023 — Present',
        role: 'Full Stack Developer',
        company: 'TNAai (AI SaaS Platform)',
        description:
            'Lead development of an AI-powered SaaS platform featuring intelligent chat with RAG (Retrieval Augmented Generation), document processing, and enterprise knowledge management. Built scalable backend with NestJS and interactive React frontend.',
        tech: ['NestJS', 'React', 'TypeScript', 'MongoDB', 'AWS', 'OpenAI', 'Prisma'],
    },
    {
        date: '2022 — 2023',
        role: 'Software Engineer',
        company: 'FAB Pakistan (Frequency Allocation Board)',
        description:
            'Developed and maintained the national Frequency Allocation management system for Pakistan. Built robust REST APIs, optimized database queries, and implemented real-time dashboard analytics for spectrum management.',
        tech: ['Node.js', 'React', 'PostgreSQL', 'Express', 'Redux', 'Chart.js'],
    },
    {
        date: '2022',
        role: 'Full Stack Developer',
        company: 'Prop-Log (Property Management)',
        description:
            'Built a comprehensive property management platform with features including tenant management, maintenance tracking, financial reporting, and automated lease workflows.',
        tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Twilio', 'Stripe'],
    },
];

export default function Experience() {
    const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section className="section experience" id="experience">
            <div className="container">
                <motion.div
                    className="experience-header"
                    ref={headerRef}
                    initial={{ opacity: 0, x: -60 }}
                    animate={headerInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="section-label">Experience</span>
                    <h2 className="section-title">
                        My professional{' '}
                        <span className="gradient-text">journey</span>
                    </h2>
                    <p className="section-subtitle">
                        A timeline of impactful roles where I've built and shipped real products used by thousands.
                    </p>
                </motion.div>

                <div className="experience-timeline">
                    {experiences.map((exp, i) => (
                        <TimelineItem key={exp.company} item={exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ item, index }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div
            className="timeline-item"
            ref={ref}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
            <span className="timeline-date">{item.date}</span>
            <h3 className="timeline-role">{item.role}</h3>
            <p className="timeline-company">{item.company}</p>
            <p className="timeline-description">{item.description}</p>
            <div className="timeline-tech">
                {item.tech.map((t) => (
                    <span key={t}>{t}</span>
                ))}
            </div>
        </motion.div>
    );
}
