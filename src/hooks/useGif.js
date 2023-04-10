import { useState , useEffect  } from "react";
import axios from 'axios';

const API_KEY = 'a8px8qDxoxruQAnVM56U2v26S5Ip0h6d'

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const [gif , setGif] = useState('')
    const [loading , setLoading] = useState(false);

    async function fetchData(tag){

        try{
            setLoading(true)
        const output = await axios.get(tag ? `${url}&tag=${tag}` : url );
        console.log('API fetched for tag')
        const imageSource = output.data.data.images.downsized_large.url;
        setGif(imageSource)
        setLoading(false)
        // console.log(imageSource)
    }

    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData('car');
  } , [])

  return {gif , loading , fetchData} 
};

export default useGif;
