import axios from "axios"

const API_KEY = "demo"

export async function fetchStock(symbol) {

  try {

    const response = await axios.get(

      `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${API_KEY}`

    )

    return response.data[0]

  }

  catch (error) {

    console.log(error)

    return null

  }

}