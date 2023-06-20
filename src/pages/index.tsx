import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Avatar from "../components/Avatar/Avatar"

const mainStyles: React.CSSProperties = {
  paddingLeft: '6rem',
  paddingRight: '6rem',
  paddingTop: '4rem',
  paddingBottom: '4rem',
  backgroundColor: 'lightblue',
  height: '100vh'
}

const wrapperStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '4rem',
  alignItems: 'center'
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={mainStyles}>
      <div style={wrapperStyles}>
        <h1>Simple Avatar Grid implementation</h1>
        <div style={{ minWidth: '240px', maxWidth: '240px'}}>
        <Avatar cmpHeight = '210px' bgColor = 'white' marginT = '40px' marginB='40px'
                    clipShape = 'https://atwebsite.blob.core.windows.net/images/rounded-corners-rect.svg'
                    imgSrc='https://atwebsite.blob.core.windows.net/images/Alejandro.webp' />
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
