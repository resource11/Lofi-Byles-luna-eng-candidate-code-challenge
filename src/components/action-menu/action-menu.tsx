import React, {
  useCallback,
  useContext,
  useMemo,
  useState,

  // Types
  ReactNode,
} from 'react'

import ActionMenuButton from './action-menu-button'
import ActionMenuItem from './action-menu-item'
import ActionMenuList from './action-menu-list'

import {
  formatClassList,
  joinStrings
} from '../../utils/utils'

import Portal from './portal'

import {
  AriaControlsContext,
  ToggleContext
} from './context'

import { AnalyticsContext } from '../AnalyticsContext'


type ActionMenuProps = {
  children: ReactNode,
  className?: string,
  id: string
}

const ACTION_MENU: string = `
  absolute
  z-10
`

const CLICK_OFF_OVERLAY: string = `
  absolute
  h-screen
  left-0
  top-0
  w-screen
  z-0
`

const ActionMenu = ({
  children,
  className,
  id
}: ActionMenuProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const toggleOpen = useCallback(() => setOpen(prevState => !prevState), [])
  const toggleContextValue = useMemo(() => ({open, toggleOpen}), [open])

  const [actionMenuId, setActionMenuId] = useState<string>(id)

  const formattedActionMenu: string = className
    ? joinStrings(' ', formatClassList(ACTION_MENU), className)
    : formatClassList(ACTION_MENU)

  const formattedClickOffOverlay: string = formatClassList(CLICK_OFF_OVERLAY)

  const analyticsContextValue = useContext(AnalyticsContext)
  const namespace = analyticsContextValue.namespace

  return (
    <ToggleContext.Provider value={toggleContextValue}>
      <AriaControlsContext.Provider value={{actionMenuId, setActionMenuId}}>
        <div
          className={formattedActionMenu}
          data-analytics-id={namespace}
          id={actionMenuId}
        >
          {children}
        </div>
        {
          open
            ?
              <Portal>
                <div
                  className={formattedClickOffOverlay}
                  onClick={toggleOpen}
                />
              </Portal>
            :
              null

        }
      </AriaControlsContext.Provider>
    </ToggleContext.Provider>
  )
}

ActionMenu.Button = ActionMenuButton
ActionMenu.Item = ActionMenuItem
ActionMenu.List = ActionMenuList

export default ActionMenu
