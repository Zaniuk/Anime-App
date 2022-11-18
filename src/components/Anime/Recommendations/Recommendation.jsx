import React from 'react'

export default function Recommendation({canonicalTitle, posterImage, id}) {
  return (
    <div className='anime-card recommendation'>
      <a href={`/anime/${id}`} className='anime-link'>
        <img src={posterImage} />
        <h3 className='recommendation-title'>{canonicalTitle}</h3>
      </a>

    </div>
  )
}
