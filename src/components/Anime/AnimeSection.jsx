import React, { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import { useParams } from 'react-router-dom'
import { animeDataById } from '../../utils/utils.data'
import GenreTagList from './GenreTag/GenreTagList'
export default function AnimeSection() {
  const {id} = useParams()
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('')
  const [firstEmission, setFirstEmission] = useState('')
  const [cover, setCover] = useState('')
  useEffect(() => {
    
    animeDataById(id)
      .then(data => {
        const {canonicalTitle, status, synopsis, createdAt, posterImage} = data.attributes
        const {large} = posterImage
        setTitle(canonicalTitle)
        setStatus(status)
        setDescription(synopsis)
        setFirstEmission(createdAt)
        setCover(large)
      })
  }, [])
  return (
    <Layout>

      <div>
        <img src={cover} alt={title} />
        <h1>{title}</h1>
        <p> {status} </p>
        <GenreTagList id={id} />
        <p> {description} </p>
        {/* <p> {new Date(firstEmission).toDateString()} </p> */}
      </div>
    </Layout>
  )
}
