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
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Product</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Company</a>
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


