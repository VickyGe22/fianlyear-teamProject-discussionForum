import Image from 'next/image'
import BG from '@/public/images/BG.png'


export default function Intro() {
  return (

    <div className="relative fadeIn isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Image
        src={BG}
        alt="Background"
        className="absolute inset-0 -z-10 h-full w-full object-cover filter brightness-75"
      />

        <div className="text-center mx-auto ">
          <p className="zoomIn mt-2 font-nycd text-8xl tracking-tight text-white">
            CodeInsight
          </p>
          <p className="zoomIn italic mt-6 text-xl text-pretty leading-8 text-gray-300">
            A code issues discussion forum displaying valuable code examples to advance learning 
           <br className="hidden md:block" /> and optimize code structure.
          </p>
        </div>
      </div>

  )
}