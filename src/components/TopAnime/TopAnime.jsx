import React, { useEffect, useState } from 'react'

import AnimeCard from './AnimeCard'
export default function TopAnime() {
    const [animeList, setAnimeList] = useState([])
    useEffect(() => {
        const options = { method: 'GET' };

        fetch('https://kitsu.io/api/edge/trending/anime?page[limit]=12')
            .then(response => response.json())
            .then(res => {
                res.data.pop()
                setAnimeList(res.data)
            })

    }, [])
    return (
        <div className='anime-list'>
            {
                animeList.map((anime) => {
                    const {canonicalTitle, startDate, popularityRank, status, posterImage} = anime.attributes
                    const {id} = anime
                    return <AnimeCard  key={id}
                        canonicalTitle={canonicalTitle} 
                        posterImage={posterImage.large || posterImage.original} 
                        status={status} 
                        startDate={startDate}  
                        popularityRank={popularityRank}
                        id={id}
                    />
                })
            }
           
            
        </div>
    )
}
