import { styleSourceRecord } from '@okmtyuta/amatelas-theme'
import { DiscSVG } from '@src/svg'
import { ComponentProps } from 'react'

const classes = styleSourceRecord.listItem.classes

type ListItemProps = ComponentProps<'li'>

export const ListItem = ({ children, ...props }: ListItemProps) => {
  return (
    <li {...props} className={classes.listItem}>
      <span className={classes.marker}>
        <DiscSVG className={classes.disc} />
      </span>
      {children}
    </li>
  )
}
