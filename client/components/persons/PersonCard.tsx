import { FC } from 'react'
import { Persons_persons_persons } from '../../query/types/Persons'
import { Label } from '../Label'
import styles from './PersonCard.module.css'

export const PersonCard: FC<Persons_persons_persons> = (props) => {
  const { address, name, phoneNumber } = props

  return (
    <div className={styles.personCard} data-cy="personCard">
      <div className={styles.personCardRow}>
        <Label>Name:</Label>
        <span data-cy="personCardName">{name}</span>
      </div>
      <div className={styles.personCardRow}>
        <Label>Address:</Label>
        {address}
      </div>
      <div className={styles.personCardRow}>
        <Label>Phone:</Label>
        {phoneNumber}
      </div>
    </div>
  )
}
