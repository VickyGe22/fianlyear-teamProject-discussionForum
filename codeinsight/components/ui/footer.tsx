import Logo from '@/components/ui/header-logo'

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto px-4 sm:px-6">
        <div className="py-4 md:py-8">
          {/* Top area */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-4 md:mb-6">
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <div className="shrink-0 mr-4">
                <Logo />
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex items-center space-x-4 mb-4 md:order-2 md:ml-4 md:mb-0">
              <ul className="inline-flex space-x-3">
                <li>
                  <a
                    className="flex justify-center items-center text-indigo-500 bg-indigo-100 hover:text-white hover:bg-indigo-500 rounded-full transition duration-150 ease-in-out"
                    href="#0"
                    aria-label="Twitter"
                  >
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex justify-center items-center text-indigo-500 bg-indigo-100 hover:text-white hover:bg-indigo-500 rounded-full transition duration-150 ease-in-out"
                    href="#0"
                    aria-label="Github"
                  >
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom area */}
          <div className="text-center md:flex md:items-center md:justify-between">
            {/* Left links */}
            <div className="text-sm font-medium md:order-1 mb-2 md:mb-0">
              <ul className="inline-flex flex-wrap text-sm font-medium">
                <li className="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                  <a className="text-gray-500 hover:text-gray-500 hover:underline" href="#0">
                    Terms
                  </a>
                </li>
                <li className="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                  <a className="text-gray-500 hover:text-gray-500 hover:underline" href="#0">
                    Privacy
                  </a>
                </li>
                <li className="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                  <a className="text-gray-500 hover:text-gray-500 hover:underline" href="#0">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-500">@CodeInsight.com | All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
