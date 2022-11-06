import React, {useContext} from 'react'
import { DataContext } from '../../context'

export default function Services() {
  const {data} = useContext(DataContext)

  return (
    <div>Services {data}</div>
  )
}
