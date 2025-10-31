import Image from 'next/image'

interface p {
  className?: string
}
const LogoImage = ({className}:p) => {
  return (
    <Image src="/logo.png" width={100} height={100} alt="prompt Bazar's logo" className={className}/>
  )
}

export default LogoImage
