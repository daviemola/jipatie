import GoBack from '../layout/GoBack'

function wrapper({ children, title }) {
  let desc =
    'Feel free to request any item listed here from the owners. If request is accepted you will be notified.'
  return (
    <section className="text-gray-600 mb-10 body-font">
      <div className="px-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold mt-9 text-center">{title}</h1>
        <h1 className="text-base font-normal mb-8 mt-2 text-center">{desc}</h1>
        <div className="flex flex-wrap -m-4">{children}</div>
      </div>
    </section>
  )
}

export default wrapper
