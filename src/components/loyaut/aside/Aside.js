import React from 'react'
import AsideBottom from './AsideBottom'
import AsideTop from './AsideTop'

const Aside = () => {
    return (
        <>
            <div className="aside__reyeno"></div>
            <aside className="aside__aside">
                <AsideTop />
                <AsideBottom />
            </aside>
        </>
    )
}

export default Aside
