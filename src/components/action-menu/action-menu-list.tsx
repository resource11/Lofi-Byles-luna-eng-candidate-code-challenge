import React, {
  Children,
  cloneElement,
  useContext,
  useEffect,
  useRef,

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


type ActionMenuListProps = {
  children: ReactNode,
  className?: string
}

const ACTION_MENU_LIST = `
  bg-white
  border-1
  border-nwlightgray
  mt-2
  py-2
  px-1
  rounded
  text-nwdarkgray
  text-sm
  tracking-wide
  w-max
  absolute
`

const ActionMenuList = ({
  children,
  className
}: ActionMenuListProps) => {
  const formattedActionMenuList: string = className
    ? joinStrings(' ', formatClassList(ACTION_MENU_LIST), className)
    : formatClassList(ACTION_MENU_LIST)

  const toggleContextValue = useToggleContext()
  const toggleOpen = toggleContextValue.toggleOpen
  const open = toggleContextValue.open

  const ariaControlsContextValue = useContext(AriaControlsContext)
  const actionMenuId = ariaControlsContextValue.actionMenuId

  const setRefs = useRef(new Map()).current

  useEffect(() => {
    if(open) {
      setRefs.get('0').focus()
    }
  }, [open])

  return (
    <div
      className={formattedActionMenuList}
      id={`${actionMenuId}-list`}
      role="menu"
      hidden={!open}
      onKeyDown={(e) => handleDownPress(e, open, toggleOpen, actionMenuId)}
    >
      {Children.map(children, child => {
        return cloneElement(child, {
          ref: node => {
              return !node
              ? setRefs.delete(child.key)
              : setRefs.set(child.key, node)
          }
        })
      })}
    </div>
  )
}

export default ActionMenuList
