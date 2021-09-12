import { FC } from 'react'
import styles from './Label.module.css'

export const Label: FC = ({ children }) => {
  return <span className={styles.label}>{children}</span>
}
