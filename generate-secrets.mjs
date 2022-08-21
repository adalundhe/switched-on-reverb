import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()
import { promises as Fs } from 'fs'


async function generateConfig(){

    try {
       await Fs.access('.env')
    } catch (error) {
        Fs.writeFile('.env', "")
    }
    
    const salt = await bcrypt.genSalt(16);
    // now we set user password to hashed password
    const apiToken = await bcrypt.hash(process.env.SWITCHED_ON_API_SECRET, salt);
    const authToken = await bcrypt.hash(process.env.SWITCHED_ON_AUTH_SECRET, salt);
    const authSecret = await bcrypt.hash(process.env.NEXTAUTH_SECRET_WORD, salt);

    await Fs.appendFile('.env', `\nSWITCHED_ON_API_KEY=${apiToken}`);
    await Fs.appendFile('.env', `\nSWITCHED_ON_AUTH_KEY=${authToken}`);
    await Fs.appendFile('.env', `\nNEXTAUTH_SECRET=${authSecret}`);
}

generateConfig()