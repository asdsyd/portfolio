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
  Bars3Icon,
  ChatBubbleLeftIcon,
  CloudIcon,
  CpuChipIcon,
  PaintBrushIcon,
  ServerIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  IdentificationIcon,
  WrenchScrewdriverIcon,
  CommandLineIcon,
  SparklesIcon,
} from '@heroicons/react/20/solid'
import { CursorArrowRippleIcon } from '@heroicons/react/20/solid';

const products = [
  { name: 'LinkedIn', description: 'Let\'s connect (primary communication)', href: 'https://www.linkedin.com/in/asdsyd/', icon: IdentificationIcon },
  { name: 'GitHub', description: 'Checkout my projects!', href: 'https://github.com/asdsyd', icon: WrenchScrewdriverIcon },
  { name: 'Linktree', description: 'All my links in one place', href: 'https://linktr.ee/asdsyd', icon: CursorArrowRippleIcon },
]

const callsToAction = [
  { name: 'Contact Me!', href: 'mailto:ashasd02@gmail.com', icon: ChatBubbleLeftIcon },
]

const cloudSkills = {
  aws: ['EC2', 'S3', 'Lambda', 'CloudFormation', 'IAM'],
  azure: ['Azure AD', 'Virtual Machines', 'Azure DevOps'],
  gcp: ['Compute Engine', 'Cloud Storage', 'Firebase'],
  devops: ['Docker', 'Kubernetes', 'CI/CD', 'Git'],
}

const aiTools = {
  assistants: ['ChatGPT', 'Claude', 'GitHub Copilot', 'Microsoft Copilot'],
  development: ['OpenAI API', 'LangChain', 'Python ML'],
  design: ['Midjourney', 'DALL-E', 'Stable Diffusion', 'Adobe Firefly'],
}

const designTools = ['Figma', 'Adobe Creative Suite', 'Canva', 'UI/UX Prototyping']

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center lg:p-24 bg-white dark:bg-black">

      {/* Header */}
      <header className="w-full lg:mx-24 lg:mt-8 bg-blue-800 text-white p-4 flex justify-between items-center rounded-tl-[55px] rounded-tr-[55px] hover:shadow-3xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:p-6 lg:px-8 w-full" aria-label="Global">
          <div className="flex lg:flex-1">
            <a target='_blank' href="https://www.linkedin.com/in/asdsyd/" className="-m-1.5 p-1.5">
              <span className="sr-only">Profile Pic</span>
              <img className="h-auto w-10 rounded-full" src="Selfie-blue-square.jpg" alt="profile picture" />
            </a>
          </div>

          <div className="flex flex-col items-center px-4 lg:px-10">
            <div className="text-lg font-bold">ASAD SAYEED</div>
            <div className="text-xs text-blue-200">IT Support Specialist</div>
          </div>

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
                CONNECT
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
                <div className="bg-gray-50">
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

            <Link href="#skills" className="text-sm font-semibold leading-6 hover:bg-white hover:text-black rounded-full px-2">
              SKILLS
            </Link>
            <Link href="#experience" className="text-sm font-semibold leading-6 hover:bg-white hover:text-black rounded-full px-2">
              EXPERIENCE
            </Link>
            <a target='_blank' href="https://drive.google.com/drive/folders/1hOYTr1L1v7YZJmffBZC8jGLB4V5KU4Px" className="text-sm font-semibold leading-6 hover:bg-white hover:text-black rounded-full px-2">
              RESUME
            </a>
            <Link href="#projects" className="text-sm font-semibold leading-6 hover:bg-white hover:text-black rounded-full px-2">
              PROJECTS
            </Link>
          </PopoverGroup>
        </nav>

        {/* Mobile Menu */}
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <div className="text-sm font-bold text-blue-700">ASAD SAYEED</div>
                <div className="text-xs text-gray-500">IT Support Specialist</div>
              </div>
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
                          CONNECT
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
                  <Link
                    href="#skills"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-full px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-100"
                  >
                    SKILLS
                  </Link>
                  <Link
                    href="#experience"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-full px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-100"
                  >
                    EXPERIENCE
                  </Link>
                  <a
                    target='_blank'
                    href="https://drive.google.com/drive/folders/1hOYTr1L1v7YZJmffBZC8jGLB4V5KU4Px"
                    className="-mx-3 block rounded-full px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-100"
                  >
                    RESUME
                  </a>
                  <Link
                    href="#projects"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-full px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-100"
                  >
                    PROJECTS
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide mb-2">Currently at</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              blackbelt360
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
              IT Support Specialist
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-8">
              Bridging technology and people through Cloud infrastructure, AI-powered solutions, and innovative design.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-semibold hover:shadow-3xl transition-shadow">
                Cloud Infrastructure
              </span>
              <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-semibold hover:shadow-3xl transition-shadow">
                AI Integration
              </span>
              <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-800 text-sm font-semibold hover:shadow-3xl transition-shadow">
                Design Systems
              </span>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 hover:shadow-4xl transition-shadow">
              <img
                className="w-full h-full rounded-full object-cover"
                src="Selfie-blue-square.jpg"
                alt="Asad Sayeed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex justify-center -space-x-14 blur-2xl py-4">
        <div className="w-32 h-32 mix-blend-multiply dark:mix-blend-screen bg-green-400 rounded-full"></div>
        <div className="w-32 h-32 mix-blend-multiply dark:mix-blend-screen bg-blue-400 rounded-full"></div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Skills & Expertise</h2>

        {/* Cloud Skills */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <CloudIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Cloud Platforms</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AWS */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-4xl transition-shadow">
              <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-4">AWS</h4>
              <div className="flex flex-wrap gap-2">
                {cloudSkills.aws.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Azure */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-4xl transition-shadow">
              <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-4">Azure</h4>
              <div className="flex flex-wrap gap-2">
                {cloudSkills.azure.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* GCP */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-4xl transition-shadow">
              <h4 className="font-bold text-red-600 dark:text-red-400 mb-4">Google Cloud</h4>
              <div className="flex flex-wrap gap-2">
                {cloudSkills.gcp.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-4xl transition-shadow">
              <h4 className="font-bold text-gray-700 dark:text-gray-200 mb-4">DevOps</h4>
              <div className="flex flex-wrap gap-2">
                {cloudSkills.devops.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Tools */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <SparklesIcon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">AI Tools & Technologies</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* AI Assistants */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-4xl transition-shadow">
              <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-4">AI Assistants</h4>
              <div className="flex flex-wrap gap-2">
                {aiTools.assistants.map((tool) => (
                  <span key={tool} className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Development */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-4xl transition-shadow">
              <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-4">AI Development</h4>
              <div className="flex flex-wrap gap-2">
                {aiTools.development.map((tool) => (
                  <span key={tool} className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Design */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-4xl transition-shadow">
              <h4 className="font-bold text-pink-600 dark:text-pink-400 mb-4">AI Image Generation</h4>
              <div className="flex flex-wrap gap-2">
                {aiTools.design.map((tool) => (
                  <span key={tool} className="px-3 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-semibold">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Design Tools */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <PaintBrushIcon className="h-8 w-8 text-pink-600 dark:text-pink-400" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Design Tools</h3>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-4xl transition-shadow">
            <div className="flex flex-wrap gap-3 justify-center">
              {designTools.map((tool) => (
                <span key={tool} className="px-4 py-2 rounded-full bg-pink-100 text-pink-800 text-sm font-semibold hover:bg-pink-200 transition-colors">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex justify-center -space-x-14 blur-2xl py-4">
        <div className="w-32 h-32 mix-blend-multiply dark:mix-blend-screen bg-purple-400 rounded-full"></div>
        <div className="w-32 h-32 mix-blend-multiply dark:mix-blend-screen bg-pink-400 rounded-full"></div>
      </div>

      {/* Experience Section */}
      <section id="experience" className="w-full max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Experience</h2>

        {/* Current Role */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-[55px] p-8 lg:p-12 hover:shadow-4xl transition-shadow border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <ServerIcon className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">IT Support Specialist</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">blackbelt360</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Current Position</p>

              <ul className="space-y-3 text-gray-700 dark:text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Managing and maintaining cloud infrastructure across AWS, Azure, and GCP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Implementing AI-powered tools to enhance team productivity and workflow automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Providing technical support and troubleshooting for hardware and software systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Designing intuitive solutions using Figma for internal tools and documentation</span>
                </li>
              </ul>
            </div>

            <div className="flex-shrink-0 lg:w-64">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 text-center">
                <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-4">Key Technologies</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">Cloud</span>
                  <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold">AI Tools</span>
                  <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-semibold">Figma</span>
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">DevOps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex justify-center -space-x-14 blur-2xl py-4">
        <div className="w-32 h-32 mix-blend-multiply dark:mix-blend-screen bg-blue-400 rounded-full"></div>
        <div className="w-32 h-32 mix-blend-multiply dark:mix-blend-screen bg-green-400 rounded-full"></div>
      </div>

      {/* Side Projects / iOS Apps Section */}
      <section id="projects" className="w-full max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Side Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">Indie iOS Developer</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
          <Link target='_blank' href="https://apps.apple.com/in/app/jokes-in-space/id6575360359" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden hover:shadow-4xl transition-shadow border border-gray-200 dark:border-gray-700">
              <img className="w-full max-w-md" src="JokesInSpace-marketing.png" alt="Jokes in Space App" />
            </div>
          </Link>

          <Link target='_blank' href="https://apps.apple.com/in/app/flavor-vista-ai/id6578457372" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden hover:shadow-4xl transition-shadow border border-gray-200 dark:border-gray-700">
              <img className="w-full max-w-md" src="FlavorVistaAI-marketing.png" alt="FlavorVista AI App" />
            </div>
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Link target='_blank' href="https://apps.apple.com/in/app/flavor-vista-ai/id6578457372">
            <p className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full text-gray-800 dark:text-gray-100 font-semibold hover:shadow-4xl transition-shadow">
              FlavorVista AI now on AppStore. Download Now.
            </p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl mx-auto px-6 py-12">
        <div className="flex justify-center -space-x-14 blur-2xl pb-8">
          <div className="w-32 h-32 mix-blend-multiply dark:mix-blend-screen bg-blue-400 rounded-full"></div>
          <div className="w-32 h-32 mix-blend-multiply dark:mix-blend-screen bg-pink-400 rounded-full"></div>
        </div>

        <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>Designed with Figma • Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>

    </main>
  )
}
