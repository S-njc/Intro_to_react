import React, { useState, useEffect } from 'react'

const FetchRequest = () => {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        getBeers()
    }, [])

    async function getBeers(){
        try {
            const url = "https://api.punkapi.com/v2/beers"
            const response = await fetch(url)
            const data = await response.json()
            console.log("Beers", data)
            setBeers(data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        {beers.map(b => <li key={b.id}>{b.name}</li>)}
    </div>
  )
}

export default FetchRequest

