import React, {
  createContext,
  useContext,

  // Types
  Dispatch,
  SetStateAction,
} from 'react'


type ToggleContextType = {
  open: boolean,
  toggleOpen: () => void
}

type AriaControlsContext = {
  actionMenuId: string,
  setActionMenuId: Dispatch<SetStateAction<string>>
}

export function useToggleContext() {
  const context = useContext(ToggleContext)
  if (
    context &&
    Object.keys(context).length === 0 &&
    context.constructor === Object
  ) {
    throw new Error(
      `Menu compound components cannot be rendered outside the Menu component.`
    )
    // console.log(`Menu compound components cannot be rendered outside the Menu component.`)
  }
  return context
}

export const ToggleContext = createContext<Partial<ToggleContextType>>({})

export const AriaControlsContext = createContext<AriaControlsContext>({
  actionMenuId: "",
  setActionMenuId: () => ""
})
