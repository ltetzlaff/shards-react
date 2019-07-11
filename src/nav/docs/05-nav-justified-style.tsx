import { h } from "preact"
import { Nav, NavItem, NavLink } from "../../index"
/**
 * ## Justified
 *
 * Using the `justified` prop, you can define equal-width nav elements.
 */
export default function NavPillsExample() {
  return (
    <Nav justified>
      <NavItem>
        <NavLink href="#">Active</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
  )
}
