import React from 'react'

import { Banner} from './Banner'
import { Topbar } from './Topbar'
export const Header = () => {
  return (
    <section className="banner pb-2">
        <div className="container-sm position-relative pt-4 info h-100">
            <Topbar/>
            <Banner/>
        </div>
    </section>
  )
}
