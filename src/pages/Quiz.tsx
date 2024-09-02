import { useParams } from "react-router-dom"

export default function Quiz() {
  const {questions, category} = useParams()
  return (
    <section className="flex flex-col min-h-screen justify-center items-center px-4">
      <h1 className="text-white">Quiz: {category} / {questions}</h1>
    </section>
  )
}
