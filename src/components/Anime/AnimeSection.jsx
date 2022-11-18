import React, { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import { useParams } from 'react-router-dom'
import { animeDataById } from '../../utils/utils.data'
import GenreTagList from './GenreTag/GenreTagList'
import RecommendationList from './Recommendations/RecommendationList'
export default function AnimeSection() {
  const {id, genre} = useParams()
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('')
  const [firstEmission, setFirstEmission] = useState('')
  const [cover, setCover] = useState('')
  useEffect(() => {
    
    if (id) {
      animeDataById(id)
        .then(data => {
          const {canonicalTitle, status, synopsis, startDate, posterImage} = data.attributes
          const {large} = posterImage
          setTitle(canonicalTitle)
          setStatus(status)
          setDescription(synopsis)
          setFirstEmission(startDate)
          setCover(large)
          document.title = `AnimeApp - ${canonicalTitle}`
        })
    }
  }, [])
  return (
    <Layout>

      <div className='anime-wrapper'>
        <div>
          <img src={cover} alt={title} />
          <h1>{title}</h1>
          <p> {firstEmission} </p>
          <p> {status} </p>
          <GenreTagList id={id} />
        </div>
        <p> {description} </p>
        <div>
          <RecommendationList id={id}/>
        </div>
      </div>
    </Layout>
  )
}
