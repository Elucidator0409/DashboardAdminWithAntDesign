import Typography from 'antd/es/typography/Typography'
import React from 'react'

function AppFooter() {
  return (
    <div className='AppFooter'>
      <Typography.Link href="https://www.youtube.com/@stgelucidator118" target={"_blank"}>Contact</Typography.Link>
      <Typography.Link href="#">Privacy Policy</Typography.Link>
      <Typography.Link href="#">Terms of Use</Typography.Link>
    </div>
  )
}

export default AppFooter