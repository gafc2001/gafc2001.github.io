import React,{useEffect,useRef} from 'react'

import { Banner} from './Banner'
import { Topbar } from './Topbar'
export const Header = ({data,action}) => {

  const ref = useRef(null)
  return (
    <section className="banner pb-2" ref={ref}>
        <div className="container-sm position-relative pt-4 info h-100">
            <Topbar data={data.navbar} action={action} headerHeight={ref}/>
            <Banner/>
        </div>
    </section>
  )
}
