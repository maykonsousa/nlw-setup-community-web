import { Info } from 'phosphor-react'
import React from 'react'
import { ToolTipContainer, ToolTipText } from './ToolTip.styles'

interface ToolTipInfoProps { 
    message: string
}

export const ToolTipInfo = ({ message}: ToolTipInfoProps) => {

  return (
      <ToolTipContainer>
          <Info size={18} />
          <ToolTipText>{message}</ToolTipText>
       
        
      </ToolTipContainer>
  )
}
