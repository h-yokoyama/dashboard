import Typography from '@mui/material/Typography'
import React from 'react'

export interface Props {
  publishOn: string | undefined
}

const PublishOn: React.FC<Props> = ({ publishOn }) => {
  return <Typography variant='body1'>{publishOn}</Typography>
}
export default PublishOn
