import Typography from 'typography'
import theme from 'typography-theme-de-young'

theme.googleFonts = [
  {
    name: 'Open Sans',
    styles: [
      '300',
    ],
  },
  {
    name: 'Lato',
    styles: [
      '300',
    ],
  },
  {
    name: 'Fira Sans',
    styles: [
      '400'
    ],
  },
  {
    name: 'Montserrat',
    styles: [
      '300'
    ]
  }
]

theme.baseFontSize = '16px'
theme.scaleRatio = 1.6
theme.headerFontFamily = ['Fira Sans', 'sans-serif']
theme.bodyFontFamily = ['Montserrat', 'sans-serif']

theme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  'body': {
    // background: 'linear-gradient(to top left, #e2bcc4, #416788)',
    boxShadow: 'none'
  },
  'h1,h2': {
    fontWeight: 400,
  },
  'a': {
    fontWeight: 400,
    textDecoration: 'none',
  },
  'a:hover': {
    color: 'green'
  },

  'small': {
    fontSize: '0.8em',
    color: '#999',
  }
})

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale