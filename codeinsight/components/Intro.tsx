import Link from 'next/link'
import Image from 'next/image'
import BG from '@/public/images/BG.png'


export default function Intro() {
  return (
    <section className="relative overflow-hidden drop-shadow-lg">
      {/* Bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-white pointer-events-none -z-10" aria-hidden="true" />

      <div className="md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <Image src={BG} className="max-w-none" priority alt="Background" />
      </div> 

      {/* Backgroud : <div className="max-w-6xl mx-auto px-4 sm:px-6"> */}
        <div className="pt-28 pb-6 md:pt-36 md:pb-16">
          {/*content */}
          <div className="text-center">
            {/* Copy */}
            <h1 className="h1 font-inter mb-6 text-5xl text-white">
              Elevating the quality of programming education
              <br></br> 
              <br></br> 
              <span className="font-nycd text-indigo-500 font-normal">CodeInsight</span>
            </h1>
            <p className="text-xl text-white text-center mb-8">
              a code issues discussion forum displaying valuable code examples 
              <br className="hidden md:block" /> to advance learning and optimize code structure.
            </p>
          </div>
        </div>
    </section>

  )
}