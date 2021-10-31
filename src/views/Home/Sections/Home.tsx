import React from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'

const FirstSectionContainer = styled.div`
    height: calc(100vh - var(--header-height));
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

const Title = styled.h2`
    font-size: 60px;
`

const Description = styled.h2`
    font-size: 40px;
    text-align: center;
    color: var(--description-white-color);
`

const HomeSection: React.FC = () => {
    return (
        <FirstSectionContainer id="home-section-home">
            <Title>파랑이</Title>
            <Description>Full-Stack Developer</Description>
            <Button>더 알아보기</Button>
        </FirstSectionContainer>
    )
}

export default HomeSection
