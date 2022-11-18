import React, { useEffect, useState } from 'react'
import { generateRecommendations } from '../../../utils/utils.recommentation'
import Recommendation from './Recommendation'
export default function RecommendationList({ id }) {
  const [recommendations, setRecommendations] = useState([])
  useEffect(() => {
    generateRecommendations(id).then(res => {
      setRecommendations(res)
    })
  }, [])
  return (
    <>
      <h2>You may like:</h2>
      <div className='anime-list'>
        {recommendations.map(recom => {
          return <Recommendation key={recom.id} id={recom.id} posterImage={recom.attributes.posterImage.medium} canonicalTitle={recom.attributes.canonicalTitle} />
        })}
        <Recommendation />
      </div>
    </>
  )
}
