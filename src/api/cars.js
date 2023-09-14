import axios from "axios"

export const getCars = async () => {
    const { data } = await axios.get('https://648f851175a96b6644453225.mockapi.io/advert?p=1&l=8')
    console.log('data', data)
    return data
}

