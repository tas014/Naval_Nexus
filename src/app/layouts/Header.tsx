import Link from "next/link"
import Image from "next/image"
import wowsLogo from '../../../public/img/wowsLogo.png'

const Header = () => {
  return (
    <header className="bg-black flex content-center justify-end text-slate-200">
        <div className="flex w-full lg:w-1/2  flex content-center justify-between">
        <div className="flex justify-center content-center ml-4 mr-4">
            <Image className="pb-2 pt-2" height={10} width={50} src={wowsLogo} alt="Naval Nexus Logo" />
            <h1 className="text-xl pl-4 pr-4 content-center">Naval Nexus</h1>
        </div>
            <nav className="flex content-center mr-5 flex-wrap">     
                  <Link className="h-fit p-7 hover:bg-slate-200 hover:text-slate-900" href={'/'}>Home</Link>
                  <Link className="h-fit p-7 hover:bg-slate-200 hover:text-slate-900" href={'/create'}>Create Post</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header