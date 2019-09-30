import React from 'react'

export default ({ children }) => (
  <div className='row vh-100-fix d-flex justify-content-center align-items-center'>
    <div className='col-12 col-sm-10 col-md-8 col-lg-6'>
      <div className='card bg-primary rounded-lg shadow-lg h-85'>
        <div className='card-body d-flex flex-column justify-content-center align-items-center bg-primary h-100'>
          {children}
        </div>
      </div>
    </div>
  </div>
)
