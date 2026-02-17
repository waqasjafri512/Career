import { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function Tilt({ children, rotationFactor = 20, scale = 1.05 }) {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useSpring(0, { stiffness: 150, damping: 20 });
    const y = useSpring(0, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(y, [-0.5, 0.5], [rotationFactor, -rotationFactor]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-rotationFactor, rotationFactor]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                transformStyle: 'preserve-3d',
            }}
            animate={{
                scale: isHovered ? scale : 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
