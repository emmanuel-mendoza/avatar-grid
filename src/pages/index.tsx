import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Avatar from "../components/Avatar/Avatar"
import SideGrowingGrid from "../components/SideGrowingGrid/SideGrowingGrid"
import "../styles/index.modules.css"

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
  'https://atwebsite.blob.core.windows.net/images/Emmanuel Mendoza.webp',
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={mainStyles}>
      <div style={wrapperStyles}>
        <h1>Simple Avatar Grid implementation</h1>
        <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%'}}>
        <div className="animated-bg"></div>
        <div className="animated-doodle"></div>
          <SideGrowingGrid coverColor="#F2F2F2">
          {
            avatars.map((avatar, i) => (
              <div style={{ minWidth: '280px', maxWidth: '280px'}} key={i}>
                <Avatar cmpHeight = '210px' bgColor = '#F2F2F2' marginT = '100px' marginB='40px'
                  clipShape = 'https://atwebsite.blob.core.windows.net/images/hexagon.svg'
                  imgSrc={avatar} />
              </div>
            ))
          }
          </SideGrowingGrid>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
