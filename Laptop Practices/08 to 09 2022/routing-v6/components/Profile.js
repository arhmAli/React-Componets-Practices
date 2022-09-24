import React from 'react';
import { Link, useParams } from 'react-router-dom';


export default function Profile() {
    const { id } = useParams();

    return (
        <>
            <h1>Inside Profile {id}</h1>
            <Link to='/about'>Go back</Link>
        </>
    )
}
