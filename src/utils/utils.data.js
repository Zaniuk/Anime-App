export const animeDataById = async (id) => {
    const data = await fetch(`https://kitsu.io/api/edge/anime/${id}`).then(res => res.json())
    return data.data
}
export const getAnimeGenres = async (id) => {
    const data = await fetch(`https://kitsu.io/api/edge/anime/${id}/categories`).then(res => res.json())
    return data.data
}