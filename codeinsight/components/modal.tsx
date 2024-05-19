import { Fragment, ReactElement } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/24/solid';



interface ModalProps {
    isOpen: boolean;  // 为 isOpen 指定布尔类型
    closeModal: () => void;  // 为 closeModal 指定函数类型，表示这个函数不返回任何值
    children?: ReactElement | ReactElement[];  // 可选的，为模态框的内容指定 React 元素类型
  }

  function Modal({ isOpen, closeModal, children }: ModalProps)  {

  return (

    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto overflow-x-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="resize scroll-smooth overflow-y-auto overflow-x-auto w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative my-8">
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-0 right-0 m-3 rounded-md bg-white p-1 text-gray-400 hover:text-gray-600"
                  aria-label="Close"
                >
                  <XCircleIcon className="h-6 w-6" />
                </button>

                {/* 模态框的内容 */}
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
