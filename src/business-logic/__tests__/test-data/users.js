import AddresseeTitle from 'constants/addresseeTitle'
import EmploymentStatus from 'constants/employmentStatus'

const fullTimeUser = {
  id: 1,
  title: AddresseeTitle.MR,
  firstName: 'Ollie',
  surname: 'Murphree',
  dob: new Date(1970, 1, 6),
  employmentStatus: EmploymentStatus.FULL_TIME,
  // employmentStatus: EmploymentStatus.FULL_TIME.id,
  annualIncome: 34000,
  houseNumber: '700',
  postcode: 'BS14 9PR'
}

const studentUser = {
  id: 2,
  title: AddresseeTitle.MISS,
  firstName: 'Elizabeth',
  surname: 'Edmundson',
  dob: new Date(1984, 29, 5),
  employmentStatus: EmploymentStatus.STUDENT,
  // employmentStatus: EmploymentStatus.STUDENT.id,
  annualIncome: 17000,
  houseNumber: '177',
  postcode: 'PH12 8UW'
}

const partTimeUser = {
  id: 3,
  title: AddresseeTitle.MR,
  firstName: 'Trevor',
  surname: 'Rieck',
  dob: new Date(1990, 7, 8),
  employmentStatus: EmploymentStatus.PART_TIME,
  // employmentStatus: EmploymentStatus.PART_TIME.id,
  annualIncome: 15000,
  houseNumber: '343',
  postcode: 'TS25 2NF'
}

export { fullTimeUser, studentUser, partTimeUser }
