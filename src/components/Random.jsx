import Spinner from './Spinner'
import useGif from '../hooks/useGif';


export default function Random() {

  
  const {loading , fetchData , gif} = useGif();
  

  return <div className="w-1/2  bg-green-500 rounded-lg border  border-black flex flex-col items-center gap-y-5  mt-[15px]  ">
          <h1 className='mt-[15px] text-3xl underline uppercase font-semibold '>A RANDOM GIF</h1>

          {!loading ? <img src={gif} alt="" width='450' /> : <Spinner/>}

          <button className='mb-[15px] w-10/12 bg-orange-300 text-lg py-2 rounded-lg hover:bg-orange-400 transition-all duration-150 ' onClick={()=>{
            fetchData()
          }} >GENERATE</button>
        </div>;
}
