import React, { useEffect, useState } from 'react'
import { getAnimeGenres } from '../../../utils/utils.data'
import GenreTag from './GenreTag'
export default function GenreTagList({id}) {
    const [genreList, setGenreList] = useState([])
    useEffect(() =>{
        getAnimeGenres(id)
            .then(res => setGenreList(res))
            .then(res => console.log(res))
    },[])
  return (
    <div>
        {
            genreList.map((genre) => {
                return <GenreTag genre={genre.attributes.title}/>
            })
        }
        {/* <GenreTag genre={'anime'}/> */}
    </div>
  )
}
