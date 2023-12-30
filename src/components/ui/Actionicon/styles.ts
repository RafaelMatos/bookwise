import { styled } from '../../../../stitches.config'

export const Container = styled('button', {
  all: 'unset',
  width: 40,
  height: 40,
  background: '$gray600',
  borderRadius: '$sm',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.2s',

  svg: {
    width: 24,
    height: 24,
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
    cursor: 'pointer',
  },
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})
