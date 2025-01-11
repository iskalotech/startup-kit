import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl p-4 sm:p-6 md:p-8 lg:p-24">
      {/* Hero Section */}
      <div className="relative mb-8 text-center md:mb-16">
        {/* Spinning Package Background */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-5">
          <div className="animate-spin-slow">
            <Image
              src="/package.svg"
              alt="Package"
              width={320}
              height={320}
              className="h-40 w-40 sm:h-60 sm:w-60 md:h-80 md:w-80"
            />
          </div>
        </div>

        <h1 className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
          Modern Next.js Starter Kit
        </h1>
        <p className="mx-auto max-w-2xl px-4 text-base text-gray-600 sm:text-lg md:text-xl dark:text-gray-400">
          A production-ready template with everything you need to build amazing
          web applications
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="mb-8 grid grid-cols-1 gap-3 sm:gap-4 md:mb-16 md:grid-cols-3">
        {/* Feature Box 1 */}
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-purple-50 to-pink-50 p-4 transition-all hover:border-purple-300 sm:rounded-3xl sm:p-6 md:col-span-2 md:p-8 dark:border-gray-800 dark:from-purple-950/30 dark:to-pink-950/30 dark:hover:border-purple-700">
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="shrink-0 rounded-xl bg-purple-100 p-2 sm:rounded-2xl sm:p-3 dark:bg-purple-900/50">
              <Image
                src="/next.svg"
                alt="Next.js"
                width={30}
                height={30}
                className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
              />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold sm:mb-2 sm:text-xl">
                Next.js 15
              </h3>
              <p className="text-sm text-gray-600 sm:text-base dark:text-gray-400">
                Latest features including App Router, Server Components, and
                optimized builds
              </p>
            </div>
          </div>
        </div>

        {/* Feature Box 2 */}
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50 p-4 transition-all hover:border-blue-300 sm:rounded-3xl sm:p-6 md:p-8 dark:border-gray-800 dark:from-blue-950/30 dark:to-purple-950/30 dark:hover:border-blue-700">
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="shrink-0 rounded-xl bg-blue-100 p-2 sm:rounded-2xl sm:p-3 dark:bg-blue-900/50">
              <Image
                src="/window.svg"
                alt="TypeScript"
                width={30}
                height={30}
                className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
              />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold sm:mb-2 sm:text-xl">
                TypeScript
              </h3>
              <p className="text-sm text-gray-600 sm:text-base dark:text-gray-400">
                Full type safety and enhanced developer experience
              </p>
            </div>
          </div>
        </div>

        {/* Feature Box 3 */}
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-pink-50 to-orange-50 p-4 transition-all hover:border-pink-300 sm:rounded-3xl sm:p-6 md:p-8 dark:border-gray-800 dark:from-pink-950/30 dark:to-orange-950/30 dark:hover:border-pink-700">
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="shrink-0 rounded-xl bg-pink-100 p-2 sm:rounded-2xl sm:p-3 dark:bg-pink-900/50">
              <Image
                src="/globe.svg"
                alt="Tailwind"
                width={30}
                height={30}
                className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
              />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold sm:mb-2 sm:text-xl">
                Tailwind CSS
              </h3>
              <p className="text-sm text-gray-600 sm:text-base dark:text-gray-400">
                Utility-first CSS framework for rapid UI development
              </p>
            </div>
          </div>
        </div>

        {/* Feature Box 4 */}
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-orange-50 to-yellow-50 p-4 transition-all hover:border-orange-300 sm:rounded-3xl sm:p-6 md:col-span-2 md:p-8 dark:border-gray-800 dark:from-orange-950/30 dark:to-yellow-950/30 dark:hover:border-orange-700">
          <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="shrink-0 rounded-xl bg-orange-100 p-2 sm:rounded-2xl sm:p-3 dark:bg-orange-900/50">
              <Image
                src="/file.svg"
                alt="ESLint"
                width={30}
                height={30}
                className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
              />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold sm:mb-2 sm:text-xl">
                Code Quality Tools
              </h3>
              <p className="text-sm text-gray-600 sm:text-base dark:text-gray-400">
                ESLint, Prettier, and VS Code configurations for consistent code
                style
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Link
          href="https://github.com/iskalotech/startup-kit"
          className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-base font-semibold text-white transition-all hover:from-purple-700 hover:to-pink-700 sm:px-8 sm:py-4 sm:text-lg"
        >
          <span>Get Started</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>

      <footer className="mt-16 text-center">
        <p className="inline-flex items-center text-sm sm:text-base">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Created with
          </span>
          <svg
            viewBox="0 0 24 24"
            className="mx-1 h-5 w-5 fill-current text-red-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 20.57s-7.25-4.17-7.25-9.48c0-2.67 2.08-4.84 4.75-4.84 1.67 0 3.14.86 4 2.16.86-1.3 2.33-2.16 4-2.16 2.67 0 4.75 2.17 4.75 4.84 0 5.31-7.25 9.48-7.25 9.48z" />
          </svg>
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            by Iskalo Tech
          </span>
        </p>
      </footer>
    </main>
  );
}
