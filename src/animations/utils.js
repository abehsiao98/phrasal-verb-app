export const C = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
};

export const label = (text) => ({
  position: 'absolute',
  bottom: 6,
  right: 8,
  fontSize: 10,
  color: '#888',
  children: text,
});
