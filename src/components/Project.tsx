import React from 'react'

type ProjectProps = {
    title: string
    bg?: string
}

const Project: React.FC<ProjectProps> = ({ bg }) => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div
                style={{
                    background: bg ? `url(${bg})` : '#000',
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                }}
            />
            <div
                style={{
                    background: '#000',
                    opacity: 0.5,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                }}
            />
        </div>
    )
}

export default Project
