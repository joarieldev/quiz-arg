interface Props {
  name: string
}

export const InputCheck = ({ name }: Props) => {
  return (
    <input
      type="checkbox"
      name={name}
      className="w-4 h-4 bg-gray-100 border-gray-300 rounded cursor-pointer accent-sky-500"
    ></input>
  )
}
