import * as React from "react"
import "react-native"
import * as renderer from "react-test-renderer"
import Separator from "../Separator"

it("looks like expected", () => {
  const tree = renderer.create(<Separator />).toJSON()
  expect(tree).toMatchSnapshot()
})
