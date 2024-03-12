export function handleAccordianLabel (title: string) {
  const { t } = useI18n()
  if (title === 'Get Started') { // required to return correct fr translation for 'Get Started' accordian title
    return t('btn.getStarted')
  } else {
    const key = title.toUpperCase() as keyof typeof ProductNames
    return ProductNames[key] // return full string from enum, eg: content file 'bn' returns 'Business Number'
  }
}
