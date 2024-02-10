import React from 'react'

export default class Form extends React.Component {

  handleInputText = event => {
    this.props.onClick(event.target.value)
  }
  
  render() {
    return (
      <div>
        <form>
          <input onChange={this.handleInputText} type='text' placeholder='Type todo' />
          <button>Submit</button>
          <button>Show all</button>
        </form>
      </div>
    )
  }
}
