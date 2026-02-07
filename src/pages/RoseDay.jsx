import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section1EternalRose from '../components/Section1EternalRose'
import Section2CinematicMemoir from '../components/Section2CinematicMemoir'
import Section3ValentineQuestion from '../components/Section3ValentineQuestion'
import ParticleSystem from '../components/ParticleSystem'
import './RoseDay.css'

function RoseDay() {
    const [currentSection, setCurrentSection] = useState(1)
    const [roseBloomedComplete, setRoseBloomedComplete] = useState(false)

    const handleSendHeart = () => {
        setCurrentSection(2)
        // Smooth scroll to section 2
        setTimeout(() => {
            document.getElementById('section-2')?.scrollIntoView({
                behavior: 'smooth'
            })
        }, 100)
    }

    const handleLetterRead = () => {
        setCurrentSection(3)
        setTimeout(() => {
            document.getElementById('section-3')?.scrollIntoView({
                behavior: 'smooth'
            })
        }, 100)
    }

    return (
        <div className="rose-day-page">
            <ParticleSystem />

            {/* Section 1: The Eternal Rose */}
            <section id="section-1" className="section">
                <Section1EternalRose
                    onComplete={() => setRoseBloomedComplete(true)}
                    onSendHeart={handleSendHeart}
                    isComplete={roseBloomedComplete}
                />
            </section>

            {/* Section 2: Cinematic Memoir */}
            <AnimatePresence>
                {currentSection >= 2 && (
                    <section id="section-2" className="section">
                        <Section2CinematicMemoir onComplete={handleLetterRead} />
                    </section>
                )}
            </AnimatePresence>

            {/* Section 3: Valentine Question */}
            <AnimatePresence>
                {currentSection >= 3 && (
                    <section id="section-3" className="section">
                        <Section3ValentineQuestion />
                    </section>
                )}
            </AnimatePresence>
        </div>
    )
}

export default RoseDay
