import React from 'react'
import styled from 'styled-components'

const SkillsSectionContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    background: var(--theme-primary);
    color: var(--primary-content-color);
`

const SkillsSection: React.FC = () => {
    return (
        <SkillsSectionContainer id="home-section-skills">
            asdf
        </SkillsSectionContainer>
    )
}

export default SkillsSection
