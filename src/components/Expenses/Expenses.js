import './Expenses.css'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import { useState } from 'react'

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021')

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear)
    console.log({ selectedYear, filterYear })
  }
  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear
  })


  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onFilterChange={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <li>
        <ExpensesList expenses={filteredExpenses} />
      </li>
    </Card>
  )
}

export default Expenses