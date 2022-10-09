import React, {
  // Types
  SetStateAction
} from 'react'

/*
  Utilities for making tailwind classes cleaner to work with
*/
export const formatClassList = (
  classList: string
): string => {
  return classList
        .replace(/\n/g, '')
        .replace(/[\s]+/g, ' ')
        .trim()
}

export const joinStrings = (
  join: string,
  ...strings: string[]
): string => {
  return strings.join(join)
}

/*
  Utility for handling keyboard events
*/
export function handleDownPress(
  e: KeyboardEvent,
  open: boolean,
  toggleOpen: SetStateAction<boolean>,
  actionMenuId: string
) {
  // console.log(`key: "${e.key}" - code: "${e.code}"`)
  const menuList = document.querySelector(`#${actionMenuId}-list`)
  const menuButtonList = menuList.querySelectorAll('button')
  const buttons = [...menuButtonList]
  const currentIndex = buttons.indexOf(document.activeElement)
  let nextIndex = 0

  const menuButton = [menuList.previousSibling]

  if (e.code === 'ArrowDown' && open === true) {
    e.preventDefault()
    nextIndex = currentIndex + 1 < buttons.length ? currentIndex + 1 : 0
    menuButtonList[nextIndex].focus()
  }

  if (e.code === 'ArrowDown' && open === false) {
    e.preventDefault()
    toggleOpen()
  }

  if (e.code === 'ArrowUp' && open === true) {
    e.preventDefault()
    nextIndex = currentIndex > 0 ? currentIndex - 1 : buttons.length - 1
    menuButtonList[nextIndex].focus()
  }

  if (e.code === 'Escape' && open === true) {
    e.preventDefault()
    toggleOpen()
    menuButton[0].focus()
  }

  if (e.code === 'Enter' && open === true) {
    e.preventDefault()
    var event = new KeyboardEvent('keydown', {'code': 'Enter'})
    document.dispatchEvent(event)
    toggleOpen()
    menuButton[0].focus()
  }
}
