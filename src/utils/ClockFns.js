import axios from "axios"

export const GET_CITIES = async (Location) => {

    //Getting Api details from envfile

    try {
        const response = axios.get(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${Location}&limit=10`)
        // console.log(response.data)
    } catch (error) {
        // console.log(error.message)
    }
}