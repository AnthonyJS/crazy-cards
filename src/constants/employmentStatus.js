const EmploymentStatus = Object.freeze({
  FULL_TIME: '1',
  PART_TIME: '2',
  STUDENT: '3'
})

const FakeI18n = statusId => {
  const englishTranslations = {
    '1': 'Full time',
    '2': 'Part time',
    '3': 'Student'
  }

  return englishTranslations[statusId]
}

export { FakeI18n }
export default EmploymentStatus
