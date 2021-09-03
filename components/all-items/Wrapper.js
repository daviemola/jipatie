function wrapper({ children, title }) {
  let desc =
    'Feel free to request any item listed here from the owners. If request is accepted you will be notified.'
  return (
    <section className="text-gray-600 pt-8 min-h-75/100">
      <div className="px-10 mx-auto max-w-7xl sm:px-6">
        <h1 className="text-2xl font-semibold text-center dark:text-white">
          {title}
        </h1>
        <h1 className="text-base font-normal mb-8 mt-2 text-center dark:text-gray-400">
          {desc}
        </h1>
        <div className="flex flex-wrap -m-4">{children}</div>
      </div>
    </section>
  )
}

export default wrapper
