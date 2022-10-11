import { memo } from 'react'

const IconComp = ({ svg }) => {
  return (
        // eslint-disable-next-line quotes
        <img src={svg} alt="icon" width={27} />
  )
}

export const IconComponent = memo(IconComp)
