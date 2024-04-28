'use client' ;
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CalendarIcon, TagIcon, UserCircleIcon } from '@heroicons/react/20/solid'

const assignees = [
  { name: 'uncategorized', value: null },
  { name: 'Computer system', value: 'Computer system' },
  { name: 'machine learning', value: 'machine learning' },
  { name: 'AI', value: 'AI' },
  { name: 'Networking', value: 'Networking' },
  // More items...
]
const labels = [
  { name: 'No Tag', value: null },
  { name: 'JAVA', value: 'JAVA' },
  { name: 'PYTHON', value: 'PYTHON' },
  { name: 'C', value: 'C' },
  { name: 'C++', value: 'C++' },
  { name: 'HTML', value: 'HTML' },
  // More items...
]
import { FaceSmileIcon as FaceSmileIconOutline, PaperClipIcon } from '@heroicons/react/24/outline'

import {
  FaceFrownIcon,
  FaceSmileIcon as FaceSmileIconMini,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'

const moods = [
  { name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Loved', value: 'loved', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
  { name: 'Happy', value: 'happy', icon: FaceSmileIconMini, iconColor: 'text-white', bgColor: 'bg-green-400' },
  { name: 'Sad', value: 'sad', icon: FaceFrownIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
  { name: 'Thumbsy', value: 'thumbsy', icon: HandThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
  { name: 'I feel nothing', value: null, icon: XMarkIcon, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Example() {

}

export function AddIssue() {
    const [assigned, setAssigned] = useState(assignees[0])
    const [labelled, setLabelled] = useState(labels[0])
    // const [dated, setDated] = useState(dueDates[0])
    const [selected, setSelected] = useState(moods[5])

  return (
    <form action="#" className="relative scroll-smooth">
      <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
        <label htmlFor="title" className="sr-only">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0"
          placeholder="Issue"
        />
        <label htmlFor="description" className="sr-only">
          Description
        </label>
        <textarea
          rows={2}
          name="description"
          id="description"
          className="block w-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="Write a description..."
          defaultValue={''}
        />

        {/* Spacer element to match the height of the toolbar */}
        <div aria-hidden="true">
          <div className="py-2">
            <div className="h-9" />
          </div>
          <div className="h-px" />
          <div className="py-2">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-px bottom-0">
        {/* Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. */}
        <div className="flex flex-nowrap justify-end space-x-2 px-2 py-2 sm:px-3">
          <Listbox as="div" value={assigned} onChange={setAssigned} className="flex-shrink-0">
            {({ open }) => (
              <>
                <Listbox.Label className="sr-only">Assign</Listbox.Label>
                <div className="relative">
                  {/* <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                    <span
                      className={classNames(
                        assigned.value === null ? '' : 'text-gray-900',
                        'hidden truncate sm:ml-2 sm:block'
                      )}
                    >
                      {assigned.value === null ? 'Subject' : assigned.name}
                    </span>
                  </Listbox.Button> */}

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {assignees.map((assignee) => (
                        <Listbox.Option
                          key={assignee.value}
                          className={({ active }) =>
                            classNames(
                              active ? 'bg-gray-100' : 'bg-white',
                              'relative cursor-default select-none px-3 py-2'
                            )
                          }
                          value={assignee}
                        >
                          <div className="flex items-center">
                            <span className="ml-3 block truncate font-medium">{assignee.name}</span>
                          </div>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>

          <Listbox as="div" value={labelled} onChange={setLabelled} className="flex-shrink-0">
            {({ open }) => (
              <>
                <Listbox.Label className="sr-only">Add a label</Listbox.Label>
                <div className="relative">
                  <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                    {/* <TagIcon
                      className={classNames(
                        labelled.value === null ? 'text-gray-300' : 'text-gray-500',
                        'h-5 w-5 flex-shrink-0 sm:-ml-1'
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        labelled.value === null ? '' : 'text-gray-900',
                        'hidden truncate sm:ml-2 sm:block'
                      )}
                    >
                      {labelled.value === null ? '#Tag' : labelled.name}
                    </span> */}
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {labels.map((label) => (
                        <Listbox.Option
                          key={label.value}
                          className={({ active }) =>
                            classNames(
                              active ? 'bg-gray-100' : 'bg-white',
                              'relative cursor-default select-none px-3 py-2'
                            )
                          }
                          value={label}
                        >
                          <div className="flex items-center">
                            <span className="block truncate font-medium">{label.name}</span>
                          </div>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
        <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
          <div className="flex">
          <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <Listbox.Label className="sr-only">Your mood</Listbox.Label>
                      <div className="relative">
                        <Listbox.Button className="relative -m-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                          <span className="flex items-center justify-center">
                            {selected.value === null ? (
                              <span>
                                <FaceSmileIconOutline className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                                <span className="sr-only">Add your mood</span>
                              </span>
                            ) : (
                              <span>
                                <span
                                  className={classNames(
                                    selected.bgColor,
                                    'flex h-8 w-8 items-center justify-center rounded-full'
                                  )}
                                >
                                  <selected.icon className="h-5 w-5 flex-shrink-0 text-white" aria-hidden="true" />
                                </span>
                                <span className="sr-only">{selected.name}</span>
                              </span>
                            )}
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 -ml-6 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                            {moods.map((mood) => (
                              <Listbox.Option
                                key={mood.value}
                                className={({ active }) =>
                                  classNames(
                                    active ? 'bg-gray-100' : 'bg-white',
                                    'relative cursor-default select-none px-3 py-2'
                                  )
                                }
                                value={mood}
                              >
                                <div className="flex items-center">
                                  <div
                                    className={classNames(
                                      mood.bgColor,
                                      'flex h-8 w-8 items-center justify-center rounded-full'
                                    )}
                                  >
                                    <mood.icon
                                      className={classNames(mood.iconColor, 'h-5 w-5 flex-shrink-0')}
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <span className="ml-3 block truncate font-medium">{mood.name}</span>
                                </div>
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
          </div>
          <div className="flex-shrink-0">
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddIssue;