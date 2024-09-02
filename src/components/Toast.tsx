interface Props {
  message: string
}
export const Toast = ({ message="mensaje por defecto" }: Props) => {
  return (
    <div className="fixed bottom-2 flex items-center w-full max-w-72 sm:max-w-xs p-4 rounded text-gray-200 bg-gray-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
      <div className="ms-3 text-sm font-normal">{message}</div>
    </div>
  )
}
