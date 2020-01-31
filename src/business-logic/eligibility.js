const eligibility = (user, availableCards) => {
  return availableCards.filter(card => {
    if (
      card.eligible &&
      !card.eligible.includes(parseInt(user.employmentStatus))
    )
      return false

    if (card.minimumSalary && user.annualIncome < card.minimumSalary)
      return false

    return true
  })
}

export default eligibility
