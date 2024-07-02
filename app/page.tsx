"use client";
import Link from 'next/link'
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  ChatBubbleLeftIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, IdentificationIcon, PhoneIcon, PlayCircleIcon, UserIcon, WrenchScrewdriverIcon } from '@heroicons/react/20/solid'
import { CursorArrowRippleIcon } from '@heroicons/react/20/solid';

const products = [
  { name: 'Linkedin', description: 'Let\'s connect (primary communication)', href: 'https://www.linkedin.com/in/asdsyd/', icon: IdentificationIcon },
  { name: 'GitHub', description: 'Checkout my projects!', href: 'https://github.com/asdsyd', icon: WrenchScrewdriverIcon },
  { name: 'Linktree', description: 'All my links in one place', href: 'https://linktr.ee/asdsyd', icon: CursorArrowRippleIcon },
]
const callsToAction = [
  { name: 'AppStore(coming soon)', href: 'https://apps.apple.com/in/', icon: UserCircleIcon },
  { name: 'Contact Me!', href: 'mailto:ashasd02@gmail.com', icon: ChatBubbleLeftIcon },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 bg-white dark:bg-black">

    <header className="w-full bg-blue-800 text-white p-4 flex justify-between items-center rounded-tl-[55px] rounded-tr-[55px] hover:shadow-3xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a target='_blank' href="https://www.linkedin.com/in/asdsyd/" className="-m-1.5 p-1.5">
            <span className="sr-only">Profile Pic</span>
            <img className="h-auto w-10 rounded-full" src="Selfie-blue-square.jpg" alt="profile picture" />
          </a>
        </div>
        
        <div className="text-lg font-bold px-10">ASAD SAYEED</div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 px-2 text-sm font-semibold rounded-full leading-6 hover:bg-white hover:text-black">
              PORTFOLIO
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-blue-200"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <a target='_blank' href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-blue-800 hover:text-white"
                  >
                    <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a target='_blank' href="https://drive.google.com/drive/folders/1hOYTr1L1v7YZJmffBZC8jGLB4V5KU4Px" className="text-sm font-semibold leading-6 hover:bg-white hover:text-black rounded-full px-2">
            RESUME
          </a>
          <Link href="/#about" className="text-sm font-semibold leading-6 hover:bg-white hover:text-black rounded-full px-2">
            ABOUT
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 ">
          <div className="flex items-center justify-between">
          <div className="text-sm font-bold px-10 text-blue-700">ASAD SAYEED</div>
            <button
              type="button"
              className="-m-2.5 rounded-full p-2.5 text-gray-700 hover:bg-pink-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-full py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-100">
                        PORTFOLIO
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            target='_blank'
                            className="block rounded-full py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-blue-100"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <a
                  target='_blank'
                  href="#"
                  className="-mx-3 block rounded-full px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-100"
                >
                  RESUME
                </a>
                <Link
                  href="#about"
                  className="-mx-3 block rounded-full px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-100"
                >
                  ABOUT
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <div className='dark:bg-white'>
      <Link target='_blank' href="https://developer.apple.com">
        <img className="h-auto hover:shadow-3xl" src="apple-developer.png" alt="Apple developer image" />
      </Link>
    </div>
    <div className='dark:bg-white'>
      <img className='h-auto' src='tech-stack.png' alt="SwiftUI, SwiftData, Swift and Xcode logo on dynamic island image" />
    </div>

    <div className='flex justify-between items-center -space-x-14 pt-3 dark:bg-white'>
      <img className="w-3/6" src="Wallpaper.png" alt="Screenshots of my Wallpaper" />
      <Link target='_blank' href="https://developer.apple.com/design/human-interface-guidelines" className='mx-2'>
        <p className='flex text-gray-600 text-center items-center text-xl md:text-5xl lg:text-5xl px-2 p-2 rounded-full hover:bg-pink-200 '>Design Different😉</p>
      </Link>
    </div> 

  <div className='dark:bg-white rounded-bl-[55px] rounded-br-[55px]'>
      <div className='flex justify-between -space-x-14 blur-2xl pt-3'>
        <img className="w-2/6 " src="FlavorVista-AI.png" alt="Screenshots of FlavorVista AI App" />
        <img className="w-2/6 " src="reddit-vision-pro.png" alt="Screenshots of FlavorVista AI App" />
      </div>    


      
      <div id="about">
        <p className="flex w-auto justify-center border-b border-gray-300 bg-gradient-to-b mx-16 from-zinc-200 p-3 px-5 text-center border bg-gray-200 rounded-full backdrop-blur-2xl bg-zinc-800/30 lg:static  lg:rounded-full lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30 hover:shadow-4xl">
              Launching FlavorVista AI on AppStore. Stay tuned.
        </p>
      </div>


      <div className="flex justify-center -space-x-14 blur-2xl pt-3">
          <div className="w-32 h-32 mix-blend-multiply bg-blue-400 rounded-full"></div>
          <div className="w-32 h-32 mix-blend-multiply bg-pink-400 rounded-full"></div>
      </div>
    </div>

    



    </main>
  )
}
