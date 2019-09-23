import React from 'react'
import ReactDOM from 'react-dom'

import CardCenter from './components/CardCenter'
import Main from './components/Main'

import useVhFix from './components/useVhFix'
import Modal from './components/Modal'
import GithubRibbon from './components/GithubRibbon'

const App = () => {
  React.useEffect(() => {
    document.title = 'QR Code Generator'
  })

  useVhFix()

  const [svg, setSvg] = React.useState({ path: '', width: 0 })
  const [tab, setTab] = React.useState(1)

  return (
    <div className='container'>
      <GithubRibbon url='https://singh.js.org/qr/' />
      <CardCenter>
        <Main setSvg={setSvg} setTab={setTab} tab={tab} />
        <Modal svg={svg} setTab={setTab} tab={tab} />
      </CardCenter>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
