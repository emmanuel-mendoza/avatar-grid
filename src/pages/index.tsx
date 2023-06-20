import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Avatar from "../components/Avatar/Avatar"
import SideGrowingGrid from "../components/SideGrowingGrid/SideGrowingGrid"

const mainStyles: React.CSSProperties = {
  paddingLeft: '6rem',
  paddingRight: '6rem',
  paddingTop: '4rem',
  paddingBottom: '4rem',
  backgroundColor: 'lightblue',
  minHeight: '100vh',
  height: '100%',
}

const wrapperStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '4rem',
  alignItems: 'center'
}

const avatars : string[] = [
  'https://atwebsite.blob.core.windows.net/images/Emmanuel Mendoza.webp',
  'https://atwebsite.blob.core.windows.net/images/Emmanuel Mendoza.webp',
  'https://atwebsite.blob.core.windows.net/images/Emmanuel Mendoza.webp',
  'https://atwebsite.blob.core.windows.net/images/Emmanuel Mendoza.webp',
  'https://atwebsite.blob.core.windows.net/images/Emmanuel Mendoza.webp'
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={mainStyles}>
      <div style={wrapperStyles}>
        <h1>Simple Avatar Grid implementation</h1>
        <SideGrowingGrid coverColor="white">
        {
          avatars.map((avatar, i) => (
            <div style={{ minWidth: '240px', maxWidth: '240px'}} key={i}>
              <Avatar cmpHeight = '210px' bgColor = 'white' marginT = '40px' marginB='40px'
                clipShape = 'https://atwebsite.blob.core.windows.net/images/rounded-corners-rect.svg'
                imgSrc={avatar} />
            </div>
          ))
        }
        </SideGrowingGrid>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
