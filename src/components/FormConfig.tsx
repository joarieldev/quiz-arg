import { useNavigate } from 'react-router-dom'
import { InputRange } from './InputRange'
import { InputCheck } from './InputCheck'
import { useState } from 'react'

export const FormConfig = () => {
  const navigate = useNavigate()
  const [countQuestions, setCountQuestions] = useState(0)
  const MAX = 100

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/quiz')
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-4 text-lg font-medium text-white"
    >
      <fieldset className="grid grid-cols-2 gap-8 p-10 border border-gray-200 rounded-md bg-gray-500/30">
        <legend>Configurar Preguntas</legend>
        <label className="space-y-2">
          <span>Cant. de Pregunta</span>
          <InputRange
            max={MAX}
            value={countQuestions}
            onChange={(e) => setCountQuestions(Number(e.target.value))}
          />
          <p>{countQuestions}</p>
        </label>
        <fieldset className="py-2">
          <legend>Seleccionar Categorias</legend>
          <label className="block space-x-2 cursor-pointer">
            <InputCheck name="dayNational" />
            <span>Dias Nacionales</span>
          </label>
          <label className="block space-x-2 cursor-pointer">
            <InputCheck name="culture" />
            <span>Cultura</span>
          </label>
          <label className="block space-x-2 cursor-pointer">
            <InputCheck name="geography" />
            <span>Geografía</span>
          </label>
        </fieldset>
      </fieldset>
      <button className="inline-block px-5 py-3 rounded max-w-56 bg-sky-700 hover:bg-sky-800">
        Comenzar
      </button>
    </form>
  )
}
