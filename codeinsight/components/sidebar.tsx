'use client'

import { useState } from 'react'

export default function Sidebar() {

  const [remoteJob, setRemoteJob] = useState<boolean>(false)

  return (
    <aside className="mb-8 md:mb-0 md:w-64 lg:w-72 md:ml-12 lg:ml-20 md:shrink-0 md:order-1">
      <div data-sticky="" data-margin-top="32" data-sticky-for="768" data-sticky-wrap="">
        <div className="relative bg-gray-50 rounded-xl border border-gray-200 p-5">
          <div className="absolute top-5 right-5 leading-none">
            <button className="text-sm font-medium text-indigo-500 hover:underline">Clear</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
            {/* Group 1 */}
            <div>
              <div className="text-sm text-gray-800 font-semibold mb-3">Category</div>
              {/* <!-- Year layer --> */}
              <div className="mb-4">
                <div className="text-sm text-gray-600 font-semibold mb-2">Year</div>
                <ul className="space-y-2">
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-sm text-gray-600 ml-2">Bachelor</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-sm text-gray-600 ml-2">Master</span>
                    </label>
                  </li>
                </ul>
              </div>
              {/* <!-- Class layer --> */}
              <div className="mb-4">
                <div className="text-sm text-gray-600 font-semibold mb-2">Class</div>
                <ul className="space-y-2">
                <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-sm text-gray-600 ml-2">cs</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-sm text-gray-600 ml-2">adsa</span>
                    </label>
                  </li>
                </ul>
              </div>
              {/* <!-- Level layer --> */}
              <div className="mb-4">
                <div className="text-sm text-gray-600 font-semibold mb-2">Level</div>
                <ul className="space-y-2">
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-sm text-gray-600 ml-2">1</span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-sm text-gray-600 ml-2">2</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            {/* Group 2 */}
            <div>
              <div className="text-sm text-gray-800 font-semibold mb-3">Languages</div>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" defaultChecked />
                    <span className="text-sm text-gray-600 ml-2">Python</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">Java</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">C++</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">C</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">Others</span>
                  </label>
                </li>
              </ul>
            </div>
            {/* Group 3 */}
            <div>
              <div className="text-sm text-gray-800 font-semibold mb-3">Types</div>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" defaultChecked />
                    <span className="text-sm text-gray-600 ml-2">Assignments</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">Exam</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">Quiz</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">Group Project</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">Code Repository</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm text-gray-600 ml-2">Others</span>
                  </label>
                </li>
              </ul>
            </div>
            {/* Group 3
            <div>
              <div className="text-sm text-gray-800 font-semibold mb-3">Replied</div>
              <div className="flex items-center">
                <div className="form-switch">
                  <input type="checkbox" id="remote-toggle" className="sr-only" checked={remoteJob} onChange={() => setRemoteJob(!remoteJob)} />
                  <label className="bg-gray-300" htmlFor="remote-toggle">
                    <span className="bg-white shadow-sm" aria-hidden="true" />
                    <span className="sr-only">Replied</span>
                  </label>
                </div>
                <div className="text-sm text-gray-400 italic ml-2">{remoteJob ? 'On' : 'Off'}</div>
              </div>
            </div> */}
            {/* Group 3 
            <div>
              <div className="text-sm text-gray-800 font-semibold mb-3">Reviewed</div>
              <div className="flex items-center">
                <div className="form-switch">
                  <input type="checkbox" id="remote-toggle" className="sr-only" checked={remoteJob} onChange={() => setRemoteJob(!remoteJob)} />
                  <label className="bg-gray-300" htmlFor="remote-toggle">
                    <span className="bg-white shadow-sm" aria-hidden="true" />
                    <span className="sr-only">Discussed</span>
                  </label>
                </div>
                <div className="text-sm text-gray-400 italic ml-2">{remoteJob ? 'On' : 'Off'}</div>
              </div>
  </div>*/}
            {/* Group 4 */}
            {/*<div>
              <div className="text-sm text-gray-800 font-semibold mb-3">University</div>
              <label className="sr-only">University</label>
              <select className="form-select w-full">
                <option>Anywhere</option>
                <option>University of Adelaide</option>
                <option>University of South Australia </option>
                <option>Flinders University</option>
              </select>
            </div>*/}
          </div>
        </div>
      </div>
    </aside>
  )
}