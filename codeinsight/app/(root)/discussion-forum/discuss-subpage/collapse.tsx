// draftjs



return (
  <><ul role="list" className="divide-y divide-gray-100">
        {discussions.map((discussion) => (
            <li
                key={discussion.id}
                className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap"
            >
                <div>
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                        <a href={discussion.href} className="hover:underline">
                            {discussion.title}
                        </a>
                    </p>
                    <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                        <p>
                            <a href={discussion.author.href} className="hover:underline">
                                {discussion.author.name}
                            </a>
                        </p>
                        <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                            <circle cx={1} cy={1} r={1} />
                        </svg>
                        <p>
                            <time dateTime={discussion.dateTime}>{discussion.date}</time>
                        </p>
                    </div>
                </div>
                <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
                    <div className="flex -space-x-0.5">
                        <dt className="sr-only">Commenters</dt>
                        {/* {discussion.commenters.map((commenter) => (
                            <dd key={commenter.id}>
                                <img
                                    className="h-6 w-6 rounded-full bg-gray-50 ring-2 ring-white"
                                    src={commenter.imageUrl}
                                    alt={commenter.name} />
                            </dd>
                        ))} */}
                    </div>

                            {/* <span className="sr-only">Total comments</span> */}

                            {/* {discussion.status === 'resolved' ? (
                                <CheckCircleIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                            ) : (
                                <ChatBubbleLeftIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                            )} */}
                    <div className="divide-y divide-gray-200 border-t">
                      {discussions.map((id) => (
                        <Disclosure as="div" key={id.id}>
                          {({ open }) => (
                            <>
                     
                        <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                aria-hidden="true"
                              />

                            ) : (
                              <PlusIcon
                                className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                     
                      <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                        <ul role="list">
                          hello
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}   
              </div>
              {/* <Disclosure as="div">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    onClick={() => toggleDetails(discussion.id)}
                    className="flex group relative w-full items-center justify-between py-6 text-left"
                  >
                    
                     <span className="ml-6 flex items-center">
                     {open ? (
                       <MinusIcon
                         className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                         aria-hidden="true"
                       />
                     ) : (
                       <PlusIcon
                         className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                         aria-hidden="true"
                       />
                     )}
                   </span>
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500">
                    <br />
                    Details go here
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure> */}

          
          
        </dl>
      </li>
    ))}
  </ul>
</>
);
}