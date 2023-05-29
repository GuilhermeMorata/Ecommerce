
import { BsCart } from 'react-icons/bs'
import Link from 'next/link';
export default function Header(){

    return(
      <header className="shadow-md z-50 bg-[#395B64] dark:shadow-slate-500 shadow-slate-700   w-full  backdrop-opacity-0 border-b-2 border-white text-white flex items-center justify-around  p-5 ">
        <div className="flex-row items-center hidden md:flex">
          <h1 className="text-5xl">GenesisBank</h1>
        </div>
        <nav className='md:text-xl flex items-center flex-row  '>
          <div className={`w-full md:flex md:w-auto`}>
            <ul className="relative  font-medium flex  p-4 md:p-0  bg-transparent  text-white border-black rounded-lg  flex-row  mt-0 border-0 ">
                <li className="mr-8 font-bold my-2 border-b-2 md:border-0 hover:border-0">
                    <Link href="/">
                      <span className=' font-bold hover:animate-textShadow cursor-pointer ' >{'Home'}</span>
                    </Link>
                </li>
                <li  className="mr-8 font-bold my-2  hover:border-0 border-b-2 md:border-0">
                  <Link href="/admin">
                    <span className=' font-bold hover:animate-textShadow cursor-pointer italic ' >{'admin'}</span>
                  </Link>
                </li>
                <hr/>
                <li className="mr-8 font-bold my-2  hover:border-0 border-b-2 md:border-0">
                  <Link  href="/wish">
                      <BsCart className="w-8 h-8 text-white hover:text-gray-700 transition-colors duration-200" />
                  </Link>
                </li>
            </ul>   
          </div>
        </nav>
      </header>
    )

}