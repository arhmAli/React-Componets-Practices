import React from 'react'

export default function InfoPlayers(props) {
    const players = props.info.map((p) => (
        <div>
            <h3>{p.name}</h3>
            <h3>{p.style}</h3>
            <h3>{p.role}</h3>
        </div>
    ))
    return (
        <>
            <div>InfoPlayers</div>
            {players}
        </>
    )
}
