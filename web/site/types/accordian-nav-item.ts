export type AccordianNavItem = {
  label: string,
  defaultOpen: boolean,
  children?: Array<{label: string, to: string}>
}
