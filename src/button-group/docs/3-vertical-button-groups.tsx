import { h } from "preact"
import { Button, ButtonGroup } from "../../index"
/**
 * ## Vertical Button Groups
 *
 * You can stack button groups vertically using the `vertical` prop.
 */
export default function VerticalButtonGroupExample() {
  return (
    <ButtonGroup vertical>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </ButtonGroup>
  )
}
