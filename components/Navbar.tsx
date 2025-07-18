
import Image from 'next/image'
import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import NavItems from './NavItems'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image
                        src="/favicon.ico"
                        alt="Logo"
                        width={46}
                        height={44}
                    />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavItems />
                <SignedOut>
                        <SignInButton>
                        <button className="btn-signin">Sign in</button>
                        </SignInButton>      
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar
