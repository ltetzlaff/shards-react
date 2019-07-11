import { h } from "preact"
import { Form, FormInput, FormGroup } from "../../index"
/**
 * ## Basic Example
 *
 * Forms can be created using the `Form` component.
 */
export default function FormExample() {
  return (
    <Form>
      <FormGroup>
        <label htmlFor="#username">Username</label>
        <FormInput id="#username" placeholder="Username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="#password">Password</label>
        <FormInput type="password" id="#password" placeholder="Password" />
      </FormGroup>
    </Form>
  )
}
