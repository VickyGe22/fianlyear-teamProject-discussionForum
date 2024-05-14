export const metadata = {
  title: 'Submission',
  description: 'Submitted Your Code Sample',
}

import Sidebar from '@/components/sidebar'
import SubmitList from './submits-list'


export default function Home() {
  return (
    <>


      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16">
            <div className="md:flex md:justify-between" data-sticky-container>

              <Sidebar />
              <div className="md:grow">
                <SubmitList />
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  )
}
