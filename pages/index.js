import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Button } from 'rsuite'

function Home(props) {
  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <div>
      <button
        type="button"
        onClick={props.testAction}
        className="tw-text-xl tw-bg-red-200 tw-p-4">
        test tailwains css if it work will render green Button
      </button>
      <br />
      <Button appearance="primary">test r-suite if it work will render primary Button</Button>
    </div>
  )
}
export default Home
