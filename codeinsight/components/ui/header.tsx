import Link from 'next/link'
import Logo from '@/components/ui/header-logo'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-10 md:h-16">
          {/* Site branding */}
          <div className="flex justify-between items-center shrink-0 mr-4">
              <Logo />
              <Link className="font-semibold text-indigo-400 hover:text-indigo-600 drop-shadow-xl" href="/code-sample-repository">
                  Code Sample Repository
              </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="ml-3">
                <Link className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm" href="/signin">
                  Sign In
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}


