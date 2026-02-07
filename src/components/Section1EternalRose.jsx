import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Section1EternalRose.css'

function Section1EternalRose({ onComplete, onSendHeart, isComplete }) {
    const [isHovering, setIsHovering] = useState(false)
    const [hasClicked, setHasClicked] = useState(false)
    const [showName, setShowName] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const [isEntering, setIsEntering] = useState(false)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY })
    }

    const handleRoseClick = () => {
        if (!hasClicked) {
            setHasClicked(true)
            // Show name after rose bloom animation
            setTimeout(() => {
                setShowName(true)
            }, 2500)
            // Show button after name appears
            setTimeout(() => {
                setShowButton(true)
                onComplete()
            }, 4000)
        }
    }

    const handleEnterHeart = () => {
        setIsEntering(true)
        // Delay the actual navigation to let the zoom animation finish
        setTimeout(() => {
            onSendHeart()
        }, 1200)
    }

    return (
        <div className="eternal-rose-container" onMouseMove={handleMouseMove}>
            {/* Custom Romantic Cursor */}
            <motion.div
                className="heart-cursor"
                animate={{
                    x: mousePos.x,
                    y: mousePos.y,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isEntering ? 0 : 1
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
            />
            {/* Fireflies */}
            <div className="fireflies">
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="firefly"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: 0
                        }}
                        animate={{
                            x: isHovering
                                ? [null, Math.random() * 400 - 200]
                                : [null, Math.random() * window.innerWidth],
                            y: isHovering
                                ? [null, Math.random() * 400 - 200]
                                : [null, Math.random() * window.innerHeight],
                            opacity: [0, 1, 0.8, 1, 0],
                            scale: [0, 1.5, 1.2, 1.5, 0]
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>

            {/* Main Content Container */}
            <div className="content-wrapper">
                {/* Rose Section */}
                <motion.div
                    className="rose-section"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onClick={handleRoseClick}
                >
                    {!hasClicked ? (
                        <motion.div
                            key="bud"
                            className="rose-bud premium-rose"
                            initial={{ scale: 0, opacity: 0, rotate: -180 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                rotate: 0,
                                y: [0, -15, 0]
                            }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{
                                scale: { duration: 1.5, ease: "easeOut" },
                                opacity: { duration: 1.5 },
                                rotate: { duration: 1.5, ease: "easeOut" },
                                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            🌹
                        </motion.div>
                    ) : (
                        <motion.div
                            key="bloom"
                            className="rose-bloom"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: isEntering ? 0 : [0.8, 1.2, 1],
                                opacity: isEntering ? 0 : 1,
                                rotate: isEntering ? 45 : [0, 5, -5, 0]
                            }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                            <motion.div
                                className="heartbeat-glow"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.7, 0.3]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <span className="rose-emoji-bloom">🌹</span>
                        </motion.div>
                    )}

                    {/* Floating Petals around Rose (only after click) */}
                    {hasClicked && (
                        <div className="petals-container">
                            {[...Array(12)].map((_, i) => {
                                const angle = (i / 12) * Math.PI * 2
                                const radius = 180
                                const x = Math.cos(angle) * radius
                                const y = Math.sin(angle) * radius

                                return (
                                    <motion.div
                                        key={i}
                                        className="petal"
                                        initial={{ x: 0, y: 0, opacity: 0, rotate: 0, scale: 0 }}
                                        animate={{
                                            x: x,
                                            y: y,
                                            opacity: 1,
                                            rotate: angle * (180 / Math.PI) + 360,
                                            scale: 1
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            delay: 0.3 + i * 0.08,
                                            ease: "easeOut"
                                        }}
                                    >
                                        🌺
                                    </motion.div>
                                )
                            })}
                        </div>
                    )}
                </motion.div>

                {/* Nidhi Name - Shows after rose blooms */}
                {showName && (
                    <motion.div
                        className="name-section"
                        initial={{ opacity: 0, y: 30, scale: 0.8 }}
                        animate={{
                            opacity: isEntering ? 0 : 1,
                            y: isEntering ? 20 : 0,
                            scale: isEntering ? 0.9 : 1
                        }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <motion.h2
                            className="nidhi-name"
                            animate={{
                                textShadow: [
                                    "0 0 20px rgba(212, 175, 55, 0.8)",
                                    "0 0 40px rgba(212, 175, 55, 1)",
                                    "0 0 20px rgba(212, 175, 55, 0.8)"
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            Nidhi
                        </motion.h2>
                    </motion.div>
                )}

                {/* Button - Shows last */}
                {showButton && (
                    <motion.div
                        className="button-section"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isEntering ? 0 : 1, y: isEntering ? 20 : 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.button
                            className="btn btn-primary send-heart-btn"
                            animate={{
                                scale: [1, 1.05, 1],
                                boxShadow: [
                                    "0 10px 40px rgba(212, 175, 55, 0.5)",
                                    "0 10px 60px rgba(212, 175, 55, 0.8)",
                                    "0 10px 40px rgba(212, 175, 55, 0.5)"
                                ]
                            }}
                            transition={{
                                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleEnterHeart}
                        >
                            <span className="btn-content">
                                Step Inside My Heart
                                <motion.span
                                    className="btn-heart"
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                >
                                    ❤️
                                </motion.span>
                            </span>
                        </motion.button>
                    </motion.div>
                )}
            </div>

            {/* Portal Heart Transition */}
            <AnimatePresence>
                {isEntering && (
                    <motion.div
                        className="portal-heart-overlay"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 50, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeIn" }}
                    >
                        ❤️
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Instruction Text - Only before click */}
            {!hasClicked && (
                <motion.div
                    className="instruction-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <motion.p
                        className="instruction-text"
                        animate={{
                            opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <span className="shimmer">Click the rose to see the magic</span>
                        <motion.span
                            className="sparkle"
                            animate={{
                                scale: [1, 1.3, 1],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            ✨
                        </motion.span>
                    </motion.p>
                </motion.div>
            )}
        </div>
    )
}

export default Section1EternalRose
