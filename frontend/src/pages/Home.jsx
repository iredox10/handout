import { useEffect } from 'react'
import Departments from '../components/Departments'
import Handouts from '../components/Handouts'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="grid">
        <Departments />
        <Handouts />
      </div>
    </div>
  )
}
