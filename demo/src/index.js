import React, {Component} from 'react'
import {render} from 'react-dom'

import Pagination from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-pagination Demo</h1>
      <Pagination
        isSeparatedPageCounter
        isBelowZeroDisabled
        pagesCount={5}
        withoutTotalPages
        selected={1}
        leftPaginationText="Предыдущая"
        rightPaginationText="Следующая"
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
