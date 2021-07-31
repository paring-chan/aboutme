import React from 'react'

type ProjectProps = {
    title: string
    brief: string
    image?: string
    bg?: string
}

const Project: React.FC<ProjectProps> = ({ bg, title, brief, image }) => {
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
                    zIndex: 10,
                }}
            />
            <div
                style={{
                    background: '#000',
                    opacity: 0.5,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: 11,
                }}
            />
            <div
                style={{
                    zIndex: 12,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: 10,
                }}
            >
                {image && (
                    <img
                        src={image}
                        width={300}
                        height={300}
                        style={{ borderRadius: 10 }}
                        alt={title}
                    />
                )}
                <h1 style={{ fontSize: 55 }}>{title}</h1>
                <div style={{ fontSize: 30 }}>{brief}</div>
            </div>
        </div>
    )
}

export default Project
