export const generateRecommendations = async (id) =>{
    
    let query = ''
    const categories = await fetch(`https://kitsu.io/api/edge/anime/${id}/categories`).then(res => res.json())

    categories.data.forEach(element => query += `filter[categories]=${element.attributes.slug}&`)
    const data = await fetch(`https://kitsu.io/api/edge/anime?page[limit]=6&${query}/`).then(res=> res.json())
    return data.data
}