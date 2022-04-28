import React,{useEffect} from 'react'

import { Banner} from './Banner'
import { Topbar } from './Topbar'
export const Header = ({data,action}) => {
  return (
    <section className="banner pb-2">
        <div className="container-sm position-relative pt-4 info h-100">
            <Topbar data={data.navbar} action={action}/>
            <Banner data={data.banner}/>
        </div>
    </section>
  )
}
