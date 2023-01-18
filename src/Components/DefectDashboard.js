import React from 'react'
import { DefectDashboardStyle } from './Styled-Components/DefectDashboardStyle'

const DefectDashboard = () => {
  return (
    <DefectDashboardStyle className='container-fuild'>
      <div className='defects-repaired'>
        <div className='defects-heading'>
          <h2>Defects</h2>
        </div>
        <div className='defects-list'>
          <div className='defect'>
            <div className='defect-name'> 
                <h5>defect xyz</h5>
            </div>
            <div className='done'> 
                <span className='btn btn-sm btn-success'>Done</span>
            </div>
          </div>

          <div className='defect'>
            <div className='defect-name'> 
                <h5>defect xyz</h5>
            </div>
            <div className='done'> 
                <span className='btn btn-sm btn-success'>Done</span>
            </div>
          </div>

          <div className='defect'>
            <div className='defect-name'> 
                <h5>defect xyz</h5>
            </div>
            <div className='done'> 
                <span className='btn btn-sm btn-success'>Done</span>
            </div>
          </div>

          <div className='defect'>
            <div className='defect-name'> 
                <h5>defect xyz</h5>
            </div>
            <div className='done'> 
                <span className='btn btn-sm btn-success'>Done</span>
            </div>
          </div>

          <div className='defect'>
            <div className='defect-name'> 
                <h5>defect xyz</h5>
            </div>
            <div className='done'> 
                <span className='btn btn-sm btn-success'>Done</span>
            </div>
          </div>

        </div>

      </div>
      <div className='add-defects'>

      </div>

    </DefectDashboardStyle>
  )
}

export default DefectDashboard

