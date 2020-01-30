const eligibility = (user, availableCards) => {
  return availableCards.filter(card => {
    if (
      card.eligible &&
      !card.eligible.map(e => e.id).includes(user.employmentStatus.id)
    )
      return false

    if (card.minimumSalary && user.annualIncome < card.minimumSalary)
      return false

    return true
  })
}

export default eligibility
