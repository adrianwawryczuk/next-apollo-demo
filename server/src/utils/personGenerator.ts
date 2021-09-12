import * as casual from 'casual'
import { Person } from '../generated/graphql'
import { arrayOf } from './arrayOf'

function generatePerson(): Person {
  return {
    id: casual.functions().uuid(),
    address: casual.functions().address(),
    name: casual.functions().name(),
    phoneNumber: casual.functions().phone(),
  }
}

export const persons = arrayOf(2000, generatePerson)

export const getPersons = () => persons
