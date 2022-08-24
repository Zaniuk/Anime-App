import React from 'react'

export default function AnimeCard({canonicalTitle, id, averageRating, startDate, popularityRank, status, posterImage}) {
  return (
    <div className='anime-card'>
      <a href={`anime/${id}`} className='anime-link'>

      <div>
        <img src={posterImage} alt={`${canonicalTitle} cover`} />
      </div>
      <span className='anime-title'>{canonicalTitle}</span>
      </a>
      <span>{averageRating}</span>
      <span>{startDate}</span>
      <span>{status}</span>
      <span>{`#${popularityRank}`}</span>
    </div>
  )
}
