import React from 'react'

export default ({ svg, tab, setTab }) => {
  const [anim, setAnim] = React.useState('')

  const handleBack = () => {
    setAnim('animated faster zoomOut')
  }

  const animEnd = () => {
    setTab(1)
    setAnim('')
  }

  return (
    <div
      className={`${
        tab === 1 ? 'd-none' : 'd-flex'
      } flex-column justify-content-center align-items-center
      ${anim}`}
      onAnimationEnd={animEnd}
    >
      <svg
        className='mb-2'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        width={svg.width}
        height={svg.width}
        viewBox={`0 0 ${svg.width} ${svg.width}`}
        preserveAspectRatio='xMinYMin meet'
      >
        <rect width='100%' height='100%' fill='white' cx='0' cy='0' />
        <path d={svg.path} stroke='transparent' fill='black' />
      </svg>
      <button
        type='button'
        className='btn btn-secondary w-100 text-primary'
        onClick={handleBack}
      >
        Go Back
      </button>
    </div>
  )
}
