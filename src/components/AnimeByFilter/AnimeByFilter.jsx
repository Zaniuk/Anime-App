import React, {useState, useEffect} from 'react'
import { animeDataByGenre, getAnimeByQuery } from '../../utils/utils.data';
import { useParams } from 'react-router-dom';
import Layout from '../../layout/Layout';
import AnimeCard from '../TopAnime/AnimeCard';
export default function AnimeByFilter() {
    const {genre, query} = useParams()
    const [animeList, setAnimeList] = useState([])
    useEffect(() => {
        
        if(genre){
        animeDataByGenre(genre)
            .then(data => {
                setAnimeList(data)
            }).catch(err => console.log(err))
        }else if(query){
            getAnimeByQuery(query)
                .then(data => {
                    setAnimeList(data)
                })
        }

    }, [])
    return (
        <Layout>
            <div className='anime-list'>
                {
                    animeList.map((anime) => {
                        const {canonicalTitle, startDate, popularityRank, status, posterImage} = anime.attributes
                        const {id} = anime
                        return <AnimeCard  
                            key={id}
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
        </Layout>
    )
}
