import Link from 'next/link'

export default function PostItem({ ...props }) {
  return (
    <div className={`[&:nth-child(-n+12)]:-order-1 group ${!props.sticky && 'border-b border-gray-200'}`}>
      <div className={`px-4 py-6 ${props.sticky && 'rounded-xl'}`}>
        <div className="sm:flex items-center space-y-3 sm:space-y-0 sm:space-x-5">
          <div className="grow lg:flex items-center justify-between space-y-5 lg:space-x-2 lg:space-y-0">
            <div>
              <div className="mb-2">
                <Link className="text-lg text-gray-800 font-bold" href={`/posts/${props.id}`}>
                  {props.title}
                </Link>
              </div>
              <div className="-m-1">
                <a
                  className={`text-xs text-gray-500 font-medium inline-flex px-2 py-0.5 hover:text-gray-600 rounded-md m-1 whitespace-nowrap transition duration-150 ease-in-out ${props.sticky ? 'bg-indigo-50' : 'bg-gray-100'
                    }`}
                  href="#0"
                >
                  {props.tag1}
                </a>
                <a
                  className={`text-xs text-gray-500 font-medium inline-flex px-2 py-0.5 hover:text-gray-600 rounded-md m-1 whitespace-nowrap transition duration-150 ease-in-out ${props.sticky ? 'bg-indigo-50' : 'bg-gray-100'
                    }`}
                  href="#0"
                >
                  {props.tag2}
                </a>
              </div>
            </div>
            <div className="min-w-[120px] flex items-center lg:justify-end space-x-3 lg:space-x-0">
              <div className="lg:hidden group-hover:lg:block">
                {/* href={`/posts/${props.id}`} */}
                <Link className="btn-sm py-1.5 px-3 text-white bg-indigo-500 hover:bg-indigo-600 group shadow-sm" href='/discussion-forum'>
                  Go to discussion{' '}
                  <span className="tracking-normal text-indigo-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </div>
              <div className="group-hover:lg:hidden text-sm italic text-gray-500">{props.numberReply}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


