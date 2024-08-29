interface Props {
  max: number
  value: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputRange = ({ max, value, onChange }: Props) => {
  return (
    <input
      type="range"
      min="0"
      max={max}
      value={value}
      className="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
      onChange={onChange}
    ></input>
  )
}
