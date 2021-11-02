import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'

const Title = styled(motion.div)`
    font-size: 40px;
    font-weight: bold;
`

const titleVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
}

const charVariants: Variants = {
    hidden: {
        opacity: 0,
        x: -30,
        display: 'inline-block',
    },
    show: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: 30,
        opacity: 0,
    },
}

const SectionTitle: React.FC<{ t: string }> = ({ t }) => {
    return (
        <Title
            variants={titleVariants}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            {t.split('').map((x, i) => (
                <motion.span
                    key={i}
                    transition={{
                        duration: 0.5,
                        type: 'spring',
                    }}
                    variants={charVariants}
                >
                    {x}
                </motion.span>
            ))}
        </Title>
    )
}

export default SectionTitle
