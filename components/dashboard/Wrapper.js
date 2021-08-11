export default function Wrapper({ children, title }) {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-3 py-6 mx-auto max-w-screen-xl">
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
          <h1 className="text-3xl py-2 mb-3 font-bold text-gray-700">
            {title}
          </h1>
          {children}
        </div>
      </div>
    </section>
  )
}
