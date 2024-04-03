// returns full string of product name from product/folder title
export function handleContentDirectoryLabel (title: string) {
  const { t } = useI18n()
  let result: string

  if (title === 'Get Started' || title === 'get-started') { // required to return correct fr translation for 'Get Started' accordian title
    result = t('btn.getStarted')
  } else {
    const key = title.toUpperCase() as keyof typeof ProductNames
    result = ProductNames[key] // return full string from enum, eg: content file 'bn' returns 'Business Number'
  }

  return result === undefined ? title : result
}
