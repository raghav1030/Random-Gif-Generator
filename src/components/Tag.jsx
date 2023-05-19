import {useState} from 'react'
import Spinner from './Spinner'
import useGif from '../hooks/useGif';


export default function Tag() {
    const [tag, setTag] = useState('') 
  
  const {gif , loading , fetchData} = useGif(tag)
  

  

  return <div className="w-1/2 mb-5 bg-blue-500 rounded-lg border  border-black flex flex-col items-center gap-y-5  mt-[15px]  ">
          <h1 className='mt-[15px] text-3xl underline uppercase font-semibold '>RANDOM {tag} GIF</h1>

          {!loading ? <img src={gif} alt="" width='450' /> : <Spinner/>}

          <input type="text" value={tag} onChange={(event)=>{setTag(event.target.value)}} placeholder='Enter a prompt for random gif generation' className='mb-[15px] w-10/12 text-lg py-2 px-5 rounded-lg' />

          <button className='mb-[15px] w-10/12 bg-orange-300 text-lg py-2 rounded-lg hover:bg-orange-400 transition-all duration-150 ' onClick={()=>{
            fetchData(tag)
          }}>

          GENERATE
          
          </button>
        </div>;
}
