import React, {Component} from 'react'
import {render} from 'react-dom'

import Pagination from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-pagination Demo</h1>
      <Pagination
        pagesCount={666444555111}
        selected={23444}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
