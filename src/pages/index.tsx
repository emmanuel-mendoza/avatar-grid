import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import AvatarCard from "../components/AvatarCard/AvatarCard"
import SideGrowingGrid from "../components/SideGrowingGrid/SideGrowingGrid"
import "../styles/index.modules.css"
import BgVideo from "../components/BgVideo/BgVideo"

const mainStyles: React.CSSProperties = {
  paddingLeft: '6rem',
  paddingRight: '6rem',
  paddingTop: '4rem',
  paddingBottom: '4rem',
  backgroundColor: 'lightblue',
  minHeight: '100vh',
  height: '100%',
  position: 'relative',
}

const wrapperStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '4rem',
  alignItems: 'center'
}

const avatars = [
  { url: 'https://res.cloudinary.com/dmela7d4j/image/upload/v1687633262/avatar-grid/zcm7p6bmdzk2iztvjcjp', name: 'Indiana Jones', role: "Adventurer and Archaeologist" },
  { url: 'https://res.cloudinary.com/dmela7d4j/image/upload/v1687633262/avatar-grid/uclotwnyw3gaorbov9n9.png', name: 'James Bond', role: "Secret Agent 007" },
  { url: 'https://res.cloudinary.com/dmela7d4j/image/upload/v1687633262/avatar-grid/tp6dnx3mgr3h0zo5upkw', name: 'Lara Croft', role: "Adventurer and Archaeologist" },
  { url: 'https://res.cloudinary.com/dmela7d4j/image/upload/v1687633262/avatar-grid/y2n4zxsyetpemrw1kstm', name: 'Sarah Connor', role: "Future War Resistance Leader" },
  { url: 'https://res.cloudinary.com/dmela7d4j/image/upload/v1687633262/avatar-grid/vn2gdgewfogyuurtyixi', name: 'Lod Voldermort', role: "He-Who-Must-Not-Be-Named" },
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={mainStyles}>
      <BgVideo />
      <div style={wrapperStyles}>
        <h1>Simple Avatar Grid implementation</h1>
        <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%', borderRadius: '20px'}}>
          <div style={{display: "none"}} className="animated-bg"></div>
          <div style={{display: "none"}} className="animated-doodle"></div>
            <SideGrowingGrid coverColor="#F2F2F2">
            {
              avatars.map((avatar, i) => (
                <div style={{ minWidth: '280px', maxWidth: '280px', height: '100%'}} key={i}>
                  <AvatarCard avatar={{ height: '210px', bgColor: '#F2F2F2', paddingTop: '100px',
                                        paddingBottom: '40px',
                                        shapeSrc: 'https://atwebsite.blob.core.windows.net/images/hexagon.svg',
                                        imageSrc: avatar.url,
                                        coveredPortion: .3}}
                              name={avatar.name}
                              role={avatar.role} />
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

export const Head: HeadFC = () => (
    <>
      <title>Avatar Grid</title>
      <meta property="og:url" content="https://avatar-grid.vercel.app/" />
      <meta property="og:title" content="Avatar Grid" />
      <meta property="og:image" content="https://atwebsite.blob.core.windows.net/images/avatar%20grid%20-%20ui%20design.png" />
      <meta property="og:description" content="A simple avatar grid implementation" />
    </>
);
