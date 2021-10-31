import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'

const Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 50px;
    flex-direction: column;
    gap: 20px;
`

const Title = styled.div`
    font-size: 50px;
    font-weight: bold;
`

const Description = styled.div`
    font-size: 30px;
`

const NotFound: React.FC = () => {
    return (
        <Container>
            <Title>Page Not Found</Title>
            <Description>에에...페이지가 없네요오</Description>
            <div>
                <Button as={Link} to="/">
                    홈으로 가기
                </Button>
            </div>
        </Container>
    )
}

export default NotFound
