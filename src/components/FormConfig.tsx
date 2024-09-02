import { useNavigate } from 'react-router-dom'
import { InputRange } from './InputRange'
import { InputCheck } from './InputCheck'
import { useState } from 'react'
import { Toast } from './Toast'
import { useToast } from '../hooks/useToast'

export const FormConfig = () => {
  const navigate = useNavigate()
  const [countQuestions, setCountQuestions] = useState(0)
  const MAX = 100
  const { toast, showToast } = useToast()

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    let category = ''
    if (e.target.culture.checked)
      category += category === '' ? 'culture' : '-culture'
    if (e.target.dayNational.checked)
      category += category === '' ? 'dayNational' : '-dayNational'
    if (e.target.geography.checked)
      category += category === '' ? 'geography' : '-geography'

    if (countQuestions === 0) {
      showToast('Se permiten de 1 a 100 preguntas')
      return
    }
    if (category === '') {
      showToast('Selecciona una categoria')
      return
    }

    navigate(`quiz/${category}/${countQuestions}`)
  }

  return (
    <>
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
      {toast.open && <Toast message={toast.msg} />}
    </>
  )
}
