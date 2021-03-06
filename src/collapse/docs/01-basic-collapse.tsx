import React from "react"
import Button from ".."
import Collapse from ".."
interface BasicCollapseExampleState {
  collapse: boolean
}
/**
 * ## Basic Example
 */
export default class BasicCollapseExample extends React.Component<
  {},
  BasicCollapseExampleState
> {
  constructor(props: {}) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { collapse: false }
  }
  public toggle() {
    this.setState({ collapse: !this.state.collapse })
  }
  public render() {
    return (
      <div>
        <Button onClick={this.toggle}>Toggle</Button>
        <Collapse open={this.state.collapse}>
          <div className="p-3 mt-3 border rounded">
            <h5>😍 Now you see me!</h5>
            <span>
              In sagittis nibh non arcu viverra, nec imperdiet quam suscipit.
              Sed porta eleifend scelerisque. Vestibulum dapibus quis arcu a
              facilisis.
            </span>
          </div>
        </Collapse>
      </div>
    )
  }
}
