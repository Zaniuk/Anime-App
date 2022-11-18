import React from 'react'

export default function GenreTag({genre, id, slug}) {
  return (
    <a className="tag-link" href={`/genre/${slug}`}><div className='tag-badge'>{genre}</div></a>
  )
}
