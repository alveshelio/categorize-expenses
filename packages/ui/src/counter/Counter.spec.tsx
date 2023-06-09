import { expect, test } from "@playwright/experimental-ct-solid";

import { Counter } from "./Counter";

test("Counter should increment", async (props) => {
  // Mount a component. Returns locator pointing to the component.
  const component = await props.mount(<Counter />);

  // As with any Playwright test, assert locator text.
  await expect(component).toContainText("Clicks: 0");

  // Perform locator click. This will trigger the event.
  await component.locator("button").click();

  // Assert that respective events have been fired.
  await expect(component).toContainText("Clicks: 1");
});
