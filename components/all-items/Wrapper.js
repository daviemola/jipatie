import GoBack from '../layout/GoBack'

function wrapper({ children, title }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto max-w-screen-xl">
        <div>
          <GoBack />
        </div>
        <h1 className="text-2xl font-semibold mb-5 inline-block">{title}</h1>
        <div className="flex flex-wrap -m-4">{children}</div>
      </div>
    </section>
  )
}

export default wrapper
