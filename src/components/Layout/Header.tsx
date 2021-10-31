import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div<{ mobileOpen: boolean }>`
    height: 100%;
    max-height: var(--header-height);
    background-color: var(--theme-primary);
    color: var(--primary-content-color);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding-left: 20px;
    padding-right: 20px;
    @media (max-width: 768px) {
        ${({ mobileOpen }) =>
            mobileOpen
                ? css`
                      max-height: 100vh;
                  `
                : css``}
    }
`

const ContentSpacer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    max-width: 1320px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    gap: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;
    }
`

const Title = styled.div`
    font-weight: 600;
    font-size: 26px;
`

const HeaderLink = styled(Link)`
    text-decoration: none;
    color: var(--primary-content-color);
    font-size: 20px;
    @media (max-width: 768px) {
        width: 100%;
        min-height: var(--header-height);
        display: flex;
        align-items: center;
    }
`

const MenuButton = styled.div`
    font-size: 24px;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
`

const DesktopOnly = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`

const MobileOnly = styled.div`
    display: none;
    width: 100%;
    @media (max-width: 768px) {
        display: block;
    }
`

const MobileHeaderContainer = styled.div`
    display: flex;
    gap: 20px;
    height: var(--header-height);
    align-items: center;
    font-size: 24px;
    font-weight: bold;
`

const Header: React.FC = () => {
    const title = '파랑이'

    const [mobileOpen, setMobileOpen] = React.useState(false)

    return (
        <Container mobileOpen={mobileOpen}>
            <ContentSpacer>
                <DesktopOnly>
                    <Title>{title}</Title>
                </DesktopOnly>
                <DesktopOnly style={{ flexGrow: 1 }} />
                <MobileOnly>
                    <MobileHeaderContainer>
                        <div>{title}</div>
                        <div style={{ flexGrow: 1 }} />
                        <MenuButton onClick={() => setMobileOpen(!mobileOpen)}>
                            <FontAwesomeIcon icon={['fas', 'bars']} />
                        </MenuButton>
                    </MobileHeaderContainer>
                </MobileOnly>
                <HeaderLink onClick={() => setMobileOpen(false)} to="/">
                    Home
                </HeaderLink>
                <HeaderLink onClick={() => setMobileOpen(false)} to="/skills">
                    Skills
                </HeaderLink>
                <HeaderLink onClick={() => setMobileOpen(false)} to="/projects">
                    Projects
                </HeaderLink>
                <HeaderLink onClick={() => setMobileOpen(false)} to="/contact">
                    Contact
                </HeaderLink>
            </ContentSpacer>
        </Container>
    )
}

export default Header
