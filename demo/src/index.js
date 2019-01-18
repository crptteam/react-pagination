import React, {Component} from 'react'
import {render} from 'react-dom'

import Pagination from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-pagination Demo</h1>
      <div  style={{ height: '70px', display: 'flex', }} >
        <Pagination
          pageCounterInvisible
          isBelowZeroDisabled
          leftPaginationText="Предыдущая"
          rightPaginationText="Следующая"
          pagesCount={0}
          selected={1}
        />
      </div>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
