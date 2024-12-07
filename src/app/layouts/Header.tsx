import Link from "next/link"
import Image from "next/image"

const Header = () => {
  return (
    <header>
        <div>
            <Image src={''} alt="Naval Nexus Logo" width={300} height={300} />
            <nav>
                <Link href={'/'}>Home</Link>
                <Link href={'/saved'}>Saved</Link>
                <Link href={'/my-posts'}>My Posts</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header