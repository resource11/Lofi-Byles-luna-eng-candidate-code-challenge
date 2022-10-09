import React, {
  useContext,

  // Types
  ReactNode
} from 'react'

import {
  AriaControlsContext,
  useToggleContext
} from './context'

import {
  formatClassList,
  handleDownPress,
  joinStrings
} from '../../utils/utils'


type ActionMenuButtonProps = {
  children: ReactNode,
  className?: string,
  id?: string,
  large?: boolean
}

const BUTTON_BASE: string = `
  active:bg-nwdarkgray
  active:border-nwdarkgray
  active:text-white
  bg-white
  border-1
  border-nwgray
  duration-200
  ease-in-out
  focus:border-nwdarkblue
  focus:outline-none
  focus:text-nwdarkblue
  font-light
  hover:border-nwdarkblue
  hover:text-nwdarkblue
  inline-flex
  items-baseline
  justify-center
  rounded
  text-nwblue
  tracking-wide
  transition
  w-max
`

const BUTTON_DEFAULT = `
  ${BUTTON_BASE}
  px-4
  py-2
  text-xs
`

const BUTTON_LARGE = `
  ${BUTTON_BASE}
  px-6
  py-4
  text-base
`

const ICON = `
  fas
  fa-chevron-down
  items-baseline
`

const ActionMenuButton = ({
  children,
  className,
  id,
  large
}: ActionMenuButtonProps) => {
  const formattedButtonDefault: string = className
    ? joinStrings(' ', formatClassList(BUTTON_DEFAULT), className)
    : formatClassList(BUTTON_DEFAULT)

  const formattedButtonLarge: string = className
    ? joinStrings(' ', formatClassList(BUTTON_LARGE), className)
    : formatClassList(BUTTON_LARGE)

  const formattedIcon: string = large
    ? joinStrings(' ', formatClassList(ICON), 'ml-6')
    : joinStrings(' ', formatClassList(ICON), 'ml-4')

  const toggleContextValue = useToggleContext()
  const toggleOpen = toggleContextValue.toggleOpen
  const open = toggleContextValue.open

  const ariaControlsContextValue = useContext(AriaControlsContext)
  const actionMenuId = ariaControlsContextValue.actionMenuId

  return (
    <button
      aria-controls={`${actionMenuId}-list`}
      aria-expanded={open}
      aria-haspopup="true"
      className={
        large
          ? formattedButtonLarge
          : formattedButtonDefault
      }
      id={id}
      type="button"
      onClick={toggleOpen}
      onKeyDown={(e) => handleDownPress(e, open, toggleOpen, actionMenuId)}
    >
      {children}
      <i
        aria-hidden="true"
        className={formattedIcon}
      />
    </button>
  )
}

export default ActionMenuButton
