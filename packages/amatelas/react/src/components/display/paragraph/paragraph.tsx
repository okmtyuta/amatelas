import { styleSourceRecord } from '@okmtyuta/amatelas-theme'
import { ComponentProps } from 'react'

type ParagraphProps = ComponentProps<'p'>

const { classes } = styleSourceRecord.paragraph

export const Paragraph = ({ ...props }: ParagraphProps) => {
  return <p {...props} className={classes.paragraph} />
}
