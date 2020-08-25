const theme = {}

theme.breakpoints = ['576px', '768px', '1024px', '1200px', '1600px']
theme.grid = {}
theme.grid.gutters = { xs: 8, sm: 16, md: 16, lg: 24, xl: 24, xxl: 40 }
theme.grid.paddings = [
  theme.grid.gutters.xs/2,
  theme.grid.gutters.sm/2,
  theme.grid.gutters.md/2,
  theme.grid.gutters.lg/2,
  theme.grid.gutters.xl/2,
  theme.grid.gutters.xxl/2
]

export default theme

