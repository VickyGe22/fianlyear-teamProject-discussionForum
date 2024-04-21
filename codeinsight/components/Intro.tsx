import Link from 'next/link'
import Image from 'next/image'
import BG from '@/public/images/BG.png'


export default function Intro() {
  return (
    // <section className="relative overflow-hidden drop-shadow-lg">
    //   {/* Bg */}
    //   <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-white pointer-events-none -z-10" aria-hidden="true" />

    //   <div className="md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
    //     <Image src={BG} className="max-w-none" priority alt="Background" />
    //   </div> 

    //   {/* Backgroud : <div className="max-w-6xl mx-auto px-4 sm:px-6"> */}
    //     <div className="pt-28 pb-6 md:pt-36 md:pb-16">
    //       {/*content */}
    //       <div className="text-center">
    //         {/* Copy */}
    //         <span className="font-nycd text-8xl text-indigo-100 font-normal">CodeInsight</span>
    //         <br></br> 
    //         <br></br> 
    //         <h1 className="font-sans mb-6 text-2xl text-white">
    //           {/* <strong>Elevating the quality of programming education</strong> */}
    //           <p className="text-2xl tracking-wide italic text-white text-center mb-8">
    //             a code issues discussion forum displaying valuable code examples 
    //             <br className="hidden md:block" /> to advance learning and optimize code structure.
    //           </p>
    //         </h1>
    //       </div>
    //     </div>
    // </section>

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
            a code issues discussion forum displaying valuable code examples to advance learning 
           <br className="hidden md:block" /> and optimize code structure.
          </p>
        </div>
      </div>

  )
}