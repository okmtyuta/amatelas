import { Positional } from '@okmtyuta/amatelas-react'
import styles from './header.module.css'
import { ComponentProps } from 'react'

type HeaderProps = ComponentProps<'header'>

export const Header = ({ children, ...props }: HeaderProps) => {
  return (
    <Positional
      {...props}
      as="header"
      position="sticky"
      className={styles['header']}
    >
      <div className={styles['header-content']}>{children}</div>
    </Positional>
  )
}
