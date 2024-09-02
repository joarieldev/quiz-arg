import { useState } from 'react'

export const useToast = () => {
  const [toast, setToast] = useState({ open: false, msg: '' })

  const showToast = (m: string) => {
    setToast({ open: true, msg: m })
    setTimeout(() => {
      setToast({ open: false, msg: '' })
    }, 3000)
  }

  return { toast, showToast }
}
