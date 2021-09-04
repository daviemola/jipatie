export default function Wrapper({ children, title }) {
  return (
    <section className="text-gray-600 dark:text-white min-h-75/100 overflow-hidden bg-gray-100 dark:bg-gray-900">
      <div className="container px-3 py-6 mx-auto max-w-screen-xl">
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
          <h1 className="sm:text-xl text-lg md:text-xl py-2 mb-3 tracking-wide uppercase font-semibold">
            {title}
          </h1>
          {children}
        </div>
      </div>
    </section>
  )
}
