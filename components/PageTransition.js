import React, { useEffect, useState } from 'react'

export default function PageTransition() {
  const [pageTransition, setPageTransition] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageTransition(true)
    }, 0)
    setTimeout(() => {
      setPageTransition(false)
    }, 400)
    setTimeout(() => {
      setPageTransition('hide')
    }, 800)
  }, [])

  return (
    <>
      <div className={pageTransition === 'hide'? '' : pageTransition? 'page_transition active' : 'page_transition'}>
      </div>
      <div className="page_transition_line"></div>
    </>
  )
}
