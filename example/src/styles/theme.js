const theme = {}

theme.breakpoints = ['576px', '768px', '1024px', '1200px', '1600px']
theme.grid = {}
theme.grid.gutters = { xs: 16, sm: 32, md: 48, lg: 48, xl: 80, xxl: 96 }
theme.grid.paddings = [
  theme.grid.gutters.xs/2,
  theme.grid.gutters.sm/2,
  theme.grid.gutters.md/2,
  theme.grid.gutters.lg/2,
  theme.grid.gutters.xl/2,
  theme.grid.gutters.xxl/2
]

export default theme

