export const metadata = {
  title: 'Home',
  description: 'Home Page',
}

import Intro from '@/components/Intro'
import Image from 'next/image'
import submit from '@/public/images/submit.png'
import discussion from '@/public/images/discussion.png'
import review from '@/public/images/review.png'
import Link from 'next/link'



export default function Home() {

  return (
    <>    
      {/*  Page content */}
      
        <Intro /> {/* Make sure the Intro component does not have excessive bottom margin or padding */}

          <div className="flex flex-wrap justify-center gap-4 py-2 md:py-4 drop-shadow-2xl">
            <div className="group aspect-h-1 aspect-w-2 rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 overflow-hidden relative" style={{ width: 'calc(32% - 1rem)', height: '500px' }}>
              <img
                src="/images/submit.png"
                alt="submit"
                className="object-cover object-center group-hover:opacity-75"
              />
              <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
              <div className="absolute inset-0 flex flex-col justify-start items-center pt-40">
                <Link href="/submits">
                  <div className='text-center'>
                  <h3 className="text-2xl font-extrabold text-black">
                    <a href="#">
                      <span className="absolute inset-0" />
                      Submission
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-base text-black">
                    Submit your code sample
                  </p>
                </div>
                </Link>
              </div>
            </div>
            <div className="group aspect-h-1 aspect-w-2 rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 overflow-hidden relative" style={{ width: 'calc(32% - 1rem)', height: '500px' }}>
              <img
                src="/images/submit.png"
                alt="submit"
                className="object-cover object-center group-hover:opacity-75"
              />
              <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
              <div className="absolute inset-0 flex flex-col justify-start items-center pt-40">
                <Link href="/submits">
                  <div className='text-center'>
                  <h3 className="text-2xl font-extrabold text-black">
                    <a href="#">
                      <span className="absolute inset-0" />
                      Discussion
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-base text-black">
                    Join in community discussion
                  </p>
                </div>
                </Link>
              </div>
            </div>
            <div className="group aspect-h-1 aspect-w-2 rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 overflow-hidden relative" style={{ width: 'calc(32% - 1rem)', height: '500px' }}>
              <img
                src="/images/submit.png"
                alt="submit"
                className="object-cover object-center group-hover:opacity-75"
              />
              <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
              <div className="absolute inset-0 flex flex-col justify-start items-center pt-40">
                <Link href="/submits">
                  <div className='text-center'>
                  <h3 className="text-2xl font-extrabold text-black">
                    <a href="#">
                      <span className="absolute inset-0" />
                      Review
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-base text-black">
                    Check your code review
                  </p>
                </div>
                </Link>
              </div>
            </div>
        </div>
      

        <br />
        <br />
    </>
  )
}
