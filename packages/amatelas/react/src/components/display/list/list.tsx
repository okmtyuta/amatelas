import { styleSourceRecord } from '@okmtyuta/amatelas-theme'
import { ComponentProps } from 'react'

type ListProps = ComponentProps<'ul'>

const { classes } = styleSourceRecord.list

export const List = ({ ...props }: ListProps) => {
  return <ul {...props} className={classes.list} />
}
