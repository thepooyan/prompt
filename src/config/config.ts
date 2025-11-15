
type theme = "dark" | "amber"

export const theme:theme = "amber" as theme

export const getLogoUrl = () => {
  switch (theme) {
    case "dark":
      return "/logo.png"
    case "amber":
      return "/logo-prompt-bazar3.png"
  }
}
