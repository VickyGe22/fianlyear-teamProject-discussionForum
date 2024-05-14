export const metadata = {
  title: 'Home',
  description: 'Home Page',
}

import Intro from '@/components/Intro'
// import Image from 'next/image'
// import submit from '@/public/images/submit.png'
// import discussion from '@/public/images/discussion.png'
// import review from '@/public/images/review.png'
import Link from 'next/link'




export default function Home() {

  return (
    <>    
      {/*  Page content */}
      
        <Intro /> {/* Make sure the Intro component does not have excessive bottom margin or padding */}

          <div className="flex flex-wrap slideInUp justify-center gap-4 py-2 md:py-4 drop-shadow-2xl">
            <div className="group aspect-h-1 float-animation  aspect-w-2 rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 overflow-hidden relative" style={{ width: 'calc(45% - 2rem)', height: '600px' }}>
              <img
                src="/images/submit.png"
                alt="submit"
                className="object-cover object-center w-full h-full transition-opacity duration-300 ease-in-out group-hover:brightness-50"
                style={{ maxHeight: '70%', maxWidth: '100%', margin: 'auto', position: 'absolute', top: '10%', left: '0', right: '0', bottom: '0' }}
              />
              {/* Overlay that appears on hover */}
              <div className="group absolute inset-0 bg-black bg-opacity-0 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out">
                <Link legacyBehavior href="/submits">
                  <a className="text-center">
                    <h3 className="text-2xl zoomIn font-extrabold text-black px-2 mt-4 ease-in-out " style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)' }}>
                      Submission
                    </h3>
                    <p aria-hidden="true" className="mt-1 font-medium px-10 text-xl text-pretty text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      Share your sub-optimal code samples here and turn them into powerful teaching moments
                    </p>
                  </a>
                </Link>
              </div>
            </div>
            <div className="group aspect-h-1 float-animation aspect-w-2 rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 overflow-hidden relative" style={{ width: 'calc(45% - 2rem)', height: '600px' }}>
              <img
                src="/images/discuss.png"
                alt="submit"
                className="object-cover object-center w-full h-full transition-opacity duration-300 ease-in-out group-hover:brightness-50"
                style={{ maxHeight: '70%', maxWidth: '100%', margin: 'auto', position: 'absolute', top: '10%', left: '0', right: '0', bottom: '0' }}
              />
              {/* Overlay that appears on hover */}
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center">
                <Link legacyBehavior href="/sampleLists">
                  <a className="text-center">
                  <h3 className="text-2xl zoomIn font-extrabold text-black px-2 ease-in-out mt-4 " style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)' }}>
                      Discussion
                    </h3>
                    <p aria-hidden="true" className="mt-1 font-medium px-10 text-xl text-pretty text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      Join in discussion and exchange teaching tactics to optimize your code samples 
                      </p>
                  </a>
                </Link>
              </div>
            </div>
            {/* <div className="group aspect-h-1 float-animation aspect-w-2 rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 overflow-hidden relative" style={{ width: 'calc(32% - 1rem)', height: '500px' }}>
              <img
                src="/images/review.png"
                alt="submit"
                className="object-cover object-center w-full h-full transition-opacity duration-300 ease-in-out group-hover:brightness-50"
                style={{ maxHeight: '70%', maxWidth: '100%', margin: 'auto', position: 'absolute', top: '10%', left: '0', right: '0', bottom: '0' }}
              /> */}
              {/* Overlay that appears on hover */}
              {/* <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-90 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center">
                <Link legacyBehavior href="/review">
                  <a className="text-center">
                  <h3 className="text-2xl zoomIn font-extrabold text-black px-2 ease-in-out mt-4 " style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)' }}>
                      Review
                    </h3>
                    <p aria-hidden="true" className="mt-1 font-medium px-10 text-xl text-pretty text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      Step into our Review zone <br></br>for a reflective deep dive into your code
                    </p>
                  </a>
                </Link>
              </div> */}
            {/* </div> */}
        </div>
      

        <br />
        <br />
    </>
  )
}
