export const Header = () => {
  return (
    <header className="flex flex-col items-center gap-2">
      <div className="inline-flex items-center gap-2">
        <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
          Quiz Argentina
        </h1>
        <img
          src="/flag_arg.svg"
          alt="img arg"
          className="object-contain object-center w-10 h-auto max-md:w-5"
        />
      </div>
      <p className="mb-6 text-lg font-normal text-center text-gray-300 lg:text-xl sm:px-10 text-pretty">
        Un emocionante desafío interactivo que te invita a explorar y poner a
        prueba tus conocimientos sobre la rica cultura, historia, geografía y
        tradiciones de Argentina.
      </p>
    </header>
  )
}
