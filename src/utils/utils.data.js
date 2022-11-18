export const animeDataById = async (id) => {
    const data = await fetch(`https://kitsu.io/api/edge/anime/${id}`).then(res => res.json())
    return data.data
}
export const getAnimeGenres = async (id) => {
    const data = await fetch(`https://kitsu.io/api/edge/anime/${id}/categories`).then(res => res.json())
    return data.data
}

export const animeDataByGenre = async(genre) =>{
    const data = await fetch(`https://kitsu.io/api/edge/anime?filter[categories]=${genre}&page[limit]=18`).then(res => res.json())
    return data.data
}
export const getAnimeByQuery = async(query) => {
    const parsedQuery = encodeURIComponent(query) 
    const uri = `https://kitsu.io/api/edge/anime?page[limit]=18&filter[text]=${parsedQuery}`
    const data = await fetch(uri).then(res => res.json())
    return data.data
}