import React, {
  Fragment,
  forwardRef,

  // Types
  ReactNode,
  RefObject,
} from 'react'

import { formatClassList, joinStrings } from '../../utils/utils'


type ActionMenuProps = {
  children: ReactNode,
  className?: string,
  divider?: boolean,
  iconClass?: string,
  id?: string,
  ref: RefObject<HTMLButtonElement>
}

const ACTION_MENU_ITEM = `
  cursor-pointer
  flex
  focus:bg-nwlightgray
  focus:outline-none
  hover:bg-nwlightgray
  items-baseline
  px-4
  py-1
`

const ICON = `
  fa-fw
  items-baseline
  mr-2
`

const ActionMenu = forwardRef(({
  children,
  className,
  divider,
  iconClass,
  id
}, ref: ActionMenuProps) => {
  const formattedActionMenuItem: string = className
    ? joinStrings(' ', formatClassList(ACTION_MENU_ITEM), className)
    : formatClassList(ACTION_MENU_ITEM)

  const formattedIcon: string = `${iconClass} ${formatClassList(ICON)}`

  return (
    <Fragment>
      {
        divider
          ?  <hr className="my-2" />
          : null
      }
      <button
        className={formattedActionMenuItem}
        id={id}
        role="menuitem"
        type="button"
        ref={ref}
      >
        {
          iconClass
            ?
              <i
                className={formattedIcon}
                aria-hidden="true"
              />
            :
              null
        }
        {children}
      </button>
    </Fragment>
  )
})

export default ActionMenu
