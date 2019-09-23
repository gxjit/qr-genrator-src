import React from 'react'

export default ({ children }) => (
  <div className='row vh-100-fix d-flex flex-column justify-content-center align-items-center'>
    <div className='col-6'>
      <div className='card h-100 bg-primary rounded-lg shadow-lg'>
        <div className='card-body d-flex flex-column justify-content-center align-items-center bg-primary'>
          {children}
        </div>
      </div>
    </div>
  </div>
)
