import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-black flex content-center justify-end">
        <div className="flex w-1/2 flex content-center justify-between">
            <h1 className="text-xl content-center">Naval Nexus</h1>
            <nav className="flex content-center">
                <Link className="p-4" href={'/'}>Home</Link>
                <Link className="p-4" href={'/saved'}>Saved</Link>
                <Link className="p-4" href={'/my-posts'}>My Posts</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header