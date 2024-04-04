import Image from 'next/image'
import UploadImage from '@/public/images/upload.jpg'

import Link from 'next/link'
import CodeBox from './codebox'
import MenuBox from './menubox'


export const metadata = {
  title: 'Submits - Submit Code Sample',
  description: 'Submit Code Sample',
}

export default function SubmitSample() {
  return (
    <>
    <br />
    <br />
    <br />
      <div className="mb-10 pl-10">
        <h1 className="text-4xl font-extrabold font-inter mb-5">Share Code Samples & Insights</h1>
        <div className="text-gray-500">Submit your valuable samples and insights for simplify code structure.</div>
      </div>
      

      {/* Form */}
      <form className="mb-12 pl-10 pr-10">
        <div className="divide-y divide-gray-200 -my-6">
          
          {/* Group #1 */}
          <div className="py-6">
            <div className="text-lg font-bold text-gray-800 mb-5">
              <span className="text-indigo-500"> Step 1.</span> Copy code sample here
            </div>
            {/*code samples*/}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Sample <span className="text-red-500">*</span>
                </label>
                <CodeBox />
                
              </div>
            <MenuBox /> 
            {/*comments*/}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Description <span className="text-red-500">*</span>
                </label>
                <CodeBox />
              </div>
              {/* <div>
                <label className="block text-sm font-medium mb-1" htmlFor="file">
                  Submit file <span className="text-gray-500">(optional)</span>
                </label>
                <div className="flex items-center">
                  <div className="shrink-0 mr-4">
                    <Image className="object-cover w-16 h-16 rounded-full border border-gray-200" src={UploadImage} alt="Upload" />
                  </div>
                  <div>
                    <input
                      id="file"
                      type="file"
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-indigo-500 file:text-white hover:file:bg-indigo-600 transition duration-150 ease-in-out cursor-pointer"
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Group #2 */}
          <div className="py-6">
            <div className="text-lg font-bold text-gray-800 mb-5">
              <span className="text-indigo-500">2.</span> Issue Classification
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="position">
                  Class <span className="text-red-500">*</span>
                </label>
                <input id="position" className="form-input w-full" type="text" required placeholder="E.g., Senior Software Engineer" />
              </div>
              <div>
                <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="role">
                  Languages <span className="text-rose-500">*</span>
                </label>
                <select id="role" className="form-select text-sm py-2 w-full" required>
                  <option>Python</option>
                  <option>C</option>
                  <option>C++ / Finance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="salary">
                  Tags <span className="text-gray-500">(optional)</span>
                </label>
                <input id="salary" className="form-input w-full" type="text" />
                <div className="text-xs text-gray-500 italic mt-2">Example: “while-duplicate”</div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="mt-6 flex justify-center">
        <Link href="/code-sample-repository">
          <button className="btn text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm">Submit Your Code Sample</button>
        </Link>
      </div>
      <div className="mt-4  flex justify-center">
        <div className="text-xs text-gray-500">
          By clicking to agree our{' '}
          <a className="underline" href="#0">
            Terms of Service
          </a>{' '}
          and{' '}
          <a className="underline" href="#0">
            Privacy Policy
          </a>
          .
        </div>
      </div>

    </>
  )
}
