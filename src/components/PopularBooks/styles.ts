import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '$4',
  marginTop: '$10',
  paddingRight: '$4',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none',
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
  },
})
