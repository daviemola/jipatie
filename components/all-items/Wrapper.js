function wrapper({ children, title, desc }) {
  return (
    <section className="text-gray-600 bg-gray-100 dark:bg-gray-900 pt-8 min-h-75/100">
      <div className="px-6 mx-auto max-w-7xl sm:px-12">
        <h1 className="md:text-2xl text-lg font-semibold text-center dark:text-white">
          {title}
        </h1>
        <h1 className="text-base font-normal mb-8 mt-2 text-center dark:text-gray-400">
          {desc ? desc : ''}
        </h1>
        <div className="flex flex-wrap -m-4">{children}</div>
      </div>
    </section>
  )
}

export default wrapper
