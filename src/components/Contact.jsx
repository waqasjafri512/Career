import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';

const contactCards = [
    { icon: <FiMail />, title: 'Email', value: 'waqasanjum.dev@gmail.com' },
    { icon: <FiMapPin />, title: 'Location', value: 'Pakistan' },
    { icon: <FiPhone />, title: 'Phone', value: 'Available on request' },
];

export default function Contact() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section className="section contact" id="contact" ref={ref}>
            <div className="container">
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -60 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="section-label">Get In Touch</span>
                    <h2 className="section-title">
                        Let's build something{' '}
                        <span className="gradient-text">amazing</span>
                    </h2>
                    <p className="section-subtitle">
                        Have a project in mind or want to discuss opportunities? I'd love to hear from you.
                    </p>

                    <div className="contact-cards">
                        {contactCards.map((card, i) => (
                            <motion.div
                                className="contact-card"
                                key={card.title}
                                initial={{ opacity: 0, x: -30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                            >
                                <div className="contact-card-icon">{card.icon}</div>
                                <div className="contact-card-text">
                                    <h3>{card.title}</h3>
                                    <p>{card.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="contact-form-wrapper"
                    initial={{ opacity: 0, x: 60 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" placeholder="John" />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="john@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="Tell me about your project..." />
                        </div>
                        <button type="submit" className="btn-primary">
                            <span>
                                Send Message <FiSend />
                            </span>
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
