import React,{useRef} from 'react'

import { Banner} from './Banner'
import { Topbar } from './Topbar'
export const Header = () => {

  const ref = useRef(null)
  return (
    <section className="banner pb-2" ref={ref}>
        <div className="container-sm position-relative pt-4 info h-100">
            <Topbar headerHeight={ref}/>
            <Banner/>
        </div>
    </section>
  )
}
