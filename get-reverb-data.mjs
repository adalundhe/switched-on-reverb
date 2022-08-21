import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()


async function getReverbData(){
    await axios.get(
        `${process.env.API_BASE_URL}/api/listings/fetch`,
        {
            headers:  {
                api_token: process.env.SWITCHED_ON_API_KEY,
                auth_token: process.env.SWITCHED_ON_AUTH_KEY
            }
        }
    )
}


getReverbData()