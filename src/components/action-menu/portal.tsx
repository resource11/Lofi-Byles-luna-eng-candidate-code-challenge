import { useEffect, ReactNode } from "react"
import { createPortal } from "react-dom"

type ActionMenuProps = {
  children: ReactNode
}

const Portal = ({
  children
}: ActionMenuProps) => {
  const mount: HTMLElement | null = document.getElementById("__portalroot")
  const el = document.createElement("div")

  useEffect(() => {
    mount.appendChild(el)
    return () => mount.removeChild(el)
  }, [el, mount])

  return createPortal(children, el)
}

export default Portal
