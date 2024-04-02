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
      <section>
        <br />
        <br />
      </section>
      
      {/*  Page content */}
      <section>
        <br></br>
        <Intro /> {/* Make sure the Intro component does not have excessive bottom margin or padding */}

          <div className="flex flex-wrap justify-center gap-4 py-2 md:py-4 drop-shadow-2xl">
            <div className="rounded-md overflow-hidden relative" style={{ width: 'calc(32% - 1rem)', height: '500px' }}>
              <Image src={submit} alt="submits" layout="fill" objectFit="cover" />
              <div className="absolute inset-0 flex flex-col justify-start items-center pt-40">
                <Link href="/submits">
                    <button className="inline-flex items-center rounded-lg bg-indigo-500 hover:bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-white" style={{ cursor: 'pointer' }}>
                      Submit Your Code Sample
                    </button>
                </Link>
              </div>
            </div>
          <div className="rounded-md overflow-hidden relative" style={{ width: 'calc(32% - 1rem)', height: '500px' }}>
            <Image src={discussion} alt="discussion" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 flex flex-col justify-start items-center pt-40">
                <Link href="/code-sample-repository">
                    <button className="inline-flex items-center rounded-lg bg-indigo-500 hover:bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-white" style={{ cursor: 'pointer' }}>
                      Code Issue Discussion Forum
                    </button>
                </Link>
            </div>
          </div>
          <div className="rounded-md overflow-hidden relative" style={{ width: 'calc(32% - 1rem)', height: '500px' }}>
            <Image src={review} alt="Review" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 flex flex-col justify-start items-center pt-40">
                <Link href="/review-page">
                    <button className="inline-flex items-center rounded-lg bg-indigo-500 hover:bg-indigo-600 px-4 py-2 text-sm font-bold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-white" style={{ cursor: 'pointer' }}>
                      Review Your Code Sample
                    </button>
                </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <br />
        <br />
      </section>
    </>
  )
}
