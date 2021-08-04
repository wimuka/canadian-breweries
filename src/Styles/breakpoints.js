const size = {
  xs: '375px',
  sm: '767px',
  md: '768px',
  lg: '1200px',
  xl: '1201px',
};
const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width): ${size.md}`,
  lg: `(max-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { size, device };
