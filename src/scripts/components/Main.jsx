import React from 'react'

import getSvg from '../modules/getSvg'

export default ({ setSvg, setTab, tab }) => {
  const [text, setText] = React.useState('')
  const [anim, setAnim] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setAnim('animated faster zoomOut')
  }

  const animEnd = () => {
    setSvg(getSvg(text))
    setTab(2)
    setAnim('')
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`w-100 h-100 ${tab === 2 ? 'd-none' : 'd-flex'} ${anim}`}
        onAnimationEnd={animEnd}
      >
        <div className='form-group d-flex flex-column w-100 h-100'>
          <textarea
            className='form-control mb-3 flex-grow-1'
            id='textarea'
            value={text}
            placeholder='Type the content you would like to share and then click generate...'
            onChange={e => setText(e.target.value)}
          />
          <input
            className='btn btn-secondary w-100 text-primary'
            type='submit'
            value='Generate'
          />
        </div>
      </form>
    </>
  )
}
