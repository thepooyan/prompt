"use client"
import HeaderSub, { HeaderSub as H } from "./HeaderSub"

const HeaderGuide = () => {

  const guideSubmenu:H = {
    mainItem: {name: "آموزش"},
    subItems: [
      {name: "پرامپت چیست؟", slug: "what-is-prompt"},
      {name: "n8n چیست؟", slug: "what-is-n8n"},
      {name: "آموزش نصب n8n", slug: "download-install-n8n"},
    ]
  }

  return (
    <HeaderSub {...guideSubmenu}/>
  )
}

export default HeaderGuide
