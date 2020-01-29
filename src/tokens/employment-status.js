const statuses = Object.freeze({
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  STUDENT: 'STUDENT'
})

const EmploymentStatus = [
  [statuses.FULL_TIME, 'Full time'],
  [statuses.PART_TIME, 'Part time'],
  [statuses.STUDENT, 'Student']
]

export default EmploymentStatus
