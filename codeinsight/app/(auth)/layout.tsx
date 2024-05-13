// import Image from 'next/image'
// import Illustration from '@/public/images/auth-illustration.svg'
// import TestimonialAuth01 from '@/public/images/testimonial-auth-01.jpg'
// import TestimonialAuth02 from '@/public/images/testimonial-auth-02.jpg'
// import TestimonialAuth03 from '@/public/images/testimonial-auth-03.jpg'
// import Logo from '@/components/ui/header-logo'

// export default function AuthLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <main className="flex">
//       {/* Content */}
//       <div className="min-h-screen w-full lg:w-1/2">
//         <div className="h-full">
//           <div className="h-full w-full max-w-md px-6 mx-auto flex flex-col after:mt-auto after:flex-1">
//             {/* Site header */}
//             <header className="flex-1 flex mb-auto">
//               <div className="flex items-center justify-between h-16 md:h-20">
//                 <Logo />
//               </div>
//             </header>

//             <div className="flex-1 py-8">

//               {children}

//             </div>

//           </div>
//         </div>
//       </div>

//     </main>              
//   )
// }
import Image from 'next/image'
import Illustration from '@/public/images/auth-illustration.svg'
import TestimonialAuth01 from '@/public/images/testimonial-auth-01.jpg'
import TestimonialAuth02 from '@/public/images/testimonial-auth-02.jpg'
import TestimonialAuth03 from '@/public/images/testimonial-auth-03.jpg'
import Logo from '@/components/ui/header-logo'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex justify-center items-center h-screen">
      <main className="w-full lg:w-1/2">
        <div className="h-full">
          <div className="h-full max-w-md px-6 mx-auto flex flex-col after:mt-auto after:flex-1">
            {/* Site header */}
            <header className="flex-1 flex mb-auto">
              <div className="flex items-center justify-between h-16 md:h-20">
                <Logo />
              </div>
            </header>

            <div className="flex-1 py-8">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>              
  )
}
