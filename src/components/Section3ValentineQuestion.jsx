import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import './Section3ValentineQuestion.css'

function Section3ValentineQuestion() {
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
    const [noDodgeCount, setNoDodgeCount] = useState(0)
    const [showCelebration, setShowCelebration] = useState(false)
    const [noButtonVisible, setNoButtonVisible] = useState(true)
    const noButtonRef = useRef(null)

    const handleNoHover = () => {
        if (noDodgeCount < 10) {
            // Move button to random position
            const newX = (Math.random() - 0.5) * 400
            const newY = (Math.random() - 0.5) * 300
            setNoButtonPosition({ x: newX, y: newY })
            setNoDodgeCount(prev => prev + 1)
        } else {
            // After 10 attempts, fade away
            setNoButtonVisible(false)
        }
    }

    const handleNoClick = (e) => {
        e.preventDefault()
        handleNoHover()
    }

    const handleYesClick = () => {
        setShowCelebration(true)
    }

    return (
        <div className="valentine-question-container">
            {!showCelebration ? (
                <>
                    {/* Question */}
                    <motion.h1
                        className="valentine-question"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Will you be my Valentine?
                    </motion.h1>

                    {/* Buttons */}
                    <div className="button-container">
                        {/* Yes Button */}
                        <motion.button
                            className="btn valentine-btn yes-btn"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ delay: 0.5 }}
                            onClick={handleYesClick}
                        >
                            Yes ❤️
                        </motion.button>

                        {/* No Button (Dodging) */}
                        {noButtonVisible && (
                            <motion.button
                                ref={noButtonRef}
                                className="btn valentine-btn no-btn"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: noDodgeCount >= 10 ? 0 : 1,
                                    scale: noDodgeCount >= 10 ? 0 : 1,
                                    x: noButtonPosition.x,
                                    y: noButtonPosition.y
                                }}
                                whileHover={{ scale: 1.05 }}
                                transition={{
                                    delay: 0.5,
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }}
                                onMouseEnter={handleNoHover}
                                onClick={handleNoClick}
                            >
                                No 💔
                            </motion.button>
                        )}
                    </div>

                    {/* Tooltip after attempts */}
                    {noDodgeCount > 0 && noButtonVisible && (
                        <motion.p
                            className="tooltip-text"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            key={noDodgeCount}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            {noDodgeCount === 1 && "Oops! The button moved! 😊"}
                            {noDodgeCount === 2 && "Wait... where are you going? 😲"}
                            {noDodgeCount === 3 && "Still trying to say no? 😆"}
                            {noDodgeCount === 4 && "You're persistent! I like that! 😉"}
                            {noDodgeCount === 5 && "But I'm more persistent! 💕"}
                            {noDodgeCount === 6 && "Is that a smile I see? 😄"}
                            {noDodgeCount === 7 && "You're getting closer! (Not really) 😜"}
                            {noDodgeCount === 8 && "Almost there... or maybe not? 🤭"}
                            {noDodgeCount === 9 && "Final warning: The button is tired! 😴"}
                            {noDodgeCount === 10 && "Okay, I'm taking it away now! Bye-bye! 👋"}
                        </motion.p>
                    )}

                    {!noButtonVisible && (
                        <motion.p
                            className="tooltip-text"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            Looks like 'No' isn't an option! 😊💖
                        </motion.p>
                    )}
                </>
            ) : (
                /* Celebration */
                <motion.div
                    className="celebration-container"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Heart and Petal Rain */}
                    <div className="celebration-rain">
                        {[...Array(30)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="celebration-item"
                                initial={{
                                    x: Math.random() * window.innerWidth,
                                    y: -50,
                                    rotate: 0
                                }}
                                animate={{
                                    y: window.innerHeight + 50,
                                    rotate: 360
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                    ease: "linear"
                                }}
                            >
                                {i % 2 === 0 ? '❤️' : '🌹'}
                            </motion.div>
                        ))}
                    </div>

                    <motion.h1
                        className="celebration-title"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        I knew you'd say yes!
                    </motion.h1>

                    <motion.p
                        className="celebration-message"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        Happy Rose Day, Nidhi! 🌹
                    </motion.p>

                    <motion.p
                        className="celebration-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        You make every day special ✨💕
                    </motion.p>
                </motion.div>
            )}
        </div>
    )
}

export default Section3ValentineQuestion
