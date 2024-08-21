import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="flex flex-col min-h-screen justify-center items-center px-4">
      <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
        "Quiz Argentina"
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-400 lg:text-xl sm:px-8">
        Un emocionante desafío interactivo que te invita a explorar y poner a
        prueba tus conocimientos sobre la rica cultura, historia, geografía y
        tradiciones de Argentina.
      </p>
      <Link
        to="/quiz"
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
      >
        Comenzar
      </Link>
    </section>
  )
}
