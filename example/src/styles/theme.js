const theme = {}

theme.breakpoints = ['576px', '768px', '1024px', '1200px', '1600px']

theme.grid = {}
theme.grid.gutters = { xs: 16, sm: 16, md: 24, lg: 24, xl: 24, xxl: 32 }
theme.grid.paddings = [
  theme.grid.gutters.xs / 2,
  theme.grid.gutters.sm / 2,
  theme.grid.gutters.md,
  theme.grid.gutters.lg * 2,
  theme.grid.gutters.xl * 2,
  theme.grid.gutters.xxl * 2
]
theme.primaryColor = '#1d6fdc'
theme.primaryGradient = 'linear-gradient(-45deg, #0D42B1, #247EE5)'

theme.shadow = {}
theme.shadow.card = '0 12px 8px -12px rgba(3, 11, 23, 0.2)'

theme.borderRadius = {}
theme.borderRadius.md = '8px'
theme.borderRadius.sm = '4px'

export default theme


