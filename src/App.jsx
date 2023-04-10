import Random from './components/Random';
import Tag from './components/Tag'


export default function App() {
  return <div className="w-full h-full space-2 flex flex-col background relative items-center">
            <h1 className="bg-white rounded-sm  absolute w-11/12 text-center mt-[40px]  mx-auto text-4xl font-bold   ">RANDOM GIFS</h1>
            <div className="flex flex-col w-full items-center gap-y-10 mt-[90px]  ">
              <Random></Random>
              <Tag></Tag>
            </div>
        </div>;
}
