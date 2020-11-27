import React, {useState, useEffect} from 'react'

function Airs() {

    useEffect(() => {
        fetch('https://localhost:8055/directus/items/airs').then(res => {
            console.log(res);
        }) 

    }, [])


    return (
        <div>
            test
        </div>
    )
}

export default Airs
