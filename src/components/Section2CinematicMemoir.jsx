import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Section2CinematicMemoir.css'

function Section2CinematicMemoir({ onComplete }) {
    const [showPetals, setShowPetals] = useState(true)
    const [showLetter, setShowLetter] = useState(false)

    useEffect(() => {
        // Petals settle after 3 seconds
        const petalTimer = setTimeout(() => {
            setShowPetals(false)
            setShowLetter(true)
        }, 3000)

        // Auto-scroll to next section after reading
        const completeTimer = setTimeout(() => {
            onComplete()
        }, 12000) // Give time to read the letter

        return () => {
            clearTimeout(petalTimer)
            clearTimeout(completeTimer)
        }
    }, [onComplete])

    return (
        <div className="cinematic-memoir-container">
            {/* Rose Petal Explosion */}
            {showPetals && (
                <div className="petal-explosion">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="falling-petal"
                            initial={{
                                x: window.innerWidth / 2,
                                y: window.innerHeight / 2,
                                rotate: 0,
                                opacity: 1
                            }}
                            animate={{
                                x: Math.random() * window.innerWidth,
                                y: window.innerHeight + 100,
                                rotate: Math.random() * 720 - 360,
                                opacity: [1, 1, 0.8, 0]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                ease: "easeOut",
                                delay: Math.random() * 0.5
                            }}
                        >
                            🌹
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Love Letter */}
            {showLetter && (
                <motion.div
                    className="love-letter-container"
                    initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <div className="velvet-background" />

                    <motion.div
                        className="letter-paper"
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <div className="wax-seal">💌</div>

                        <motion.div
                            className="letter-content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 2 }}
                        >
                            <h2 className="letter-greeting">My Dearest Nidhi,</h2>

                            <p className="letter-text">
                                You are the rose in my garden of life, blooming with grace and beauty.
                                Every moment with you is a petal of happiness that fills my heart.
                            </p>

                            <p className="letter-text">
                                On this Rose Day, I want you to know that you make every day feel like
                                a celebration. Your smile is my sunshine, your laughter is my favorite melody.
                            </p>

                            <p className="letter-text">
                                Thank you for being the most wonderful person in my life.
                                Here's to many more beautiful moments together. 🌹
                            </p>

                            <p className="letter-signature">
                                Forever yours,<br />
                                <span className="signature-name">Your Love</span>
                            </p>
                        </motion.div>

                        {/* Scattered Rose Petals on Letter */}
                        <div className="letter-petals">
                            <span className="letter-petal" style={{ top: '10%', left: '5%' }}>🌺</span>
                            <span className="letter-petal" style={{ top: '15%', right: '8%' }}>🌸</span>
                            <span className="letter-petal" style={{ bottom: '20%', left: '10%' }}>🌹</span>
                            <span className="letter-petal" style={{ bottom: '15%', right: '12%' }}>🌺</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}

export default Section2CinematicMemoir
