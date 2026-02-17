import { FiGithub, FiLinkedin, FiPhone, FiHeart } from 'react-icons/fi';

const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const socials = [
    { icon: <FiGithub />, href: 'https://github.com/waqasjafri512', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com/in/muhammad-waqas-anjum', label: 'LinkedIn' },
    { icon: <FiPhone />, href: 'tel:+923080425989', label: 'Phone' },
];

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <a href="#" className="footer-logo">
                    W<span className="accent">.</span>
                </a>

                <ul className="footer-links">
                    {footerLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="footer-socials">
                    {socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link"
                            aria-label={s.label}
                        >
                            {s.icon}
                        </a>
                    ))}
                </div>
            </div>

            <div className="footer-bottom container">
                <p>
                    © {new Date().getFullYear()} Waqas Anjum. Crafted with{' '}
                    <FiHeart style={{ color: '#ff6b9d', verticalAlign: 'middle' }} /> and React.
                </p>
            </div>
        </footer>
    );
}
