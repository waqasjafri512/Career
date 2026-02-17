import { useState, useEffect, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useSpring(0, { damping: 20, stiffness: 250 });
    const cursorY = useSpring(0, { damping: 20, stiffness: 250 });

    const onMouseMove = useCallback((e) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
    }, [cursorX, cursorY]);

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('interactive')
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mouseover', handleMouseOver);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [onMouseMove]);

    return (
        <>
            <motion.div
                className="custom-cursor"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                }}
                animate={{
                    scale: isHovered ? 2.5 : 1,
                    backgroundColor: isHovered ? 'rgba(108, 99, 255, 0.3)' : 'rgba(108, 99, 255, 1)',
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
            />
            <motion.div
                className="custom-cursor-outline"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                }}
                animate={{
                    scale: isHovered ? 1.5 : 1,
                    opacity: isHovered ? 0.5 : 1,
                }}
                transition={{ type: 'spring', damping: 15, stiffness: 150, mass: 1 }}
            />
        </>
    );
}
