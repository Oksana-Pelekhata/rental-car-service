import axios from "axios"

export const getCars = async () => {
    const { data } = await axios.get('https://648f851175a96b6644453225.mockapi.io/advert?p=1&l=8')
    return data
}

export const addToFavorites = async car => {
    const { data } = await axios.post('https://648f851175a96b6644453225.mockapi.io/advert', car)
    console.log('data', data)
    return data
}

export const removeFromFavorites = async id => {
    console.log('id', id)
    const { data } = await axios.delete(`https://648f851175a96b6644453225.mockapi.io/advert/${id}`)
    return data
}
