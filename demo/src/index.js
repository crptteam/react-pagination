import React, {Component} from 'react'
import {render} from 'react-dom'

import Pagination from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-pagination Demo</h1>
      <Pagination
        isInfinite
        pagesCount={123123}
        selected={1}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
