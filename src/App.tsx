import React, { Fragment } from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css'
import './styles/tailwind.css'

import ActionMenu from './components/action-menu'

import mockMenuItems from './data/mock-menu-data.json'

import AnalyticsProvider from './components/AnalyticsContext'


const App = () => {
  return (
    <Fragment>
      <header className="max-w-screen-lg py-8 mx-auto bg-gray-100 sm:px-14 sm:w-9/12">
        <h1 className="text-3xl text-gray-700">Code Challenge Sandbox</h1>
      </header>
      <main className="relative w-11/12 max-w-screen-lg min-h-screen pb-8 mx-auto app-main sm:mb-10 sm:px-14 sm:w-9/12">

        <article className="relative w-11/12 py-8 rounded-xl">
          <div className="border-b-4 border-solid rounded-sm border-nwblue w-max">
            <h2 className="text-2xl text-gray-600">Action Menu Variants</h2>
          </div>
          <div
            aria-label="ActionMenu20 variants"
            className="grid max-w-xl grid-cols-2 gap-4 mt-8"
            role="region"
          >
            <div>
              <h3 className="text-lg text-gray-600">ActionMenu20 Default</h3>
                <AnalyticsProvider namespace="id">
                  <ActionMenu className="mt-4" id="action-menu">
                    <ActionMenu.Button>
                      Label
                    </ActionMenu.Button>
                    <ActionMenu.List>
                      {
                        mockMenuItems.map((item, index) => {
                          const title = item.title
                          const iconClass = item.iconClass
                          const divider = item.divider
                          return (
                            <ActionMenu.Item
                              divider={divider}
                              iconClass={iconClass}
                              key={index}
                            >
                              {title}
                            </ActionMenu.Item>
                          )
                        })
                      }
                    </ActionMenu.List>
                  </ActionMenu>
                </AnalyticsProvider>
            </div>
            <div>
              <h3 className="text-lg text-gray-600">ActionMenu20 Large</h3>
              <ActionMenu className="mt-4" id="action-menu">
                <ActionMenu.Button
                  large
                >
                  Label
                </ActionMenu.Button>
                <ActionMenu.List>
                  {
                    mockMenuItems.map((item, index) => {
                      const title = item.title
                      const iconClass = item.iconClass
                      const divider = item.divider
                      return (
                        <ActionMenu.Item
                          divider={divider}
                          iconClass={iconClass}
                          key={index}
                        >
                          {title}
                        </ActionMenu.Item>
                      )
                    })
                  }
                </ActionMenu.List>
              </ActionMenu>
            </div>
          </div>
        </article>
      </main>
    </Fragment>
  )
}

export default App
