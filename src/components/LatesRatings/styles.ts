import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  gap: '$3',
  border: '1px solid $gray300',
  paddingBottom: 40,

  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '> section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
    marginTop: '$4',
  },
})
