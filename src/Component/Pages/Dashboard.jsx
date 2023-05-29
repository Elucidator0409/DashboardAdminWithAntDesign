import React from 'react'
import  HomeDesign  from 'Component/HomeDesign/HomeDesign'
import  SpecContent  from 'Component/HomeDesign/SpecContent'
import styled from 'styled-components'
const StyledDiv = styled.div`
  display: inline-block;
  
`
function Dashboard() {
  return (
    <StyledDiv >
      <HomeDesign />
      <SpecContent />  
    </StyledDiv>
  )
}

export default Dashboard