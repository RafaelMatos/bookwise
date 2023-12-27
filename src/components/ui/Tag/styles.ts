import { styled } from '../../../../stitches.config'

export const Container = styled('button', {
  all: 'unset',
  background: 'none',
  color: '$purple100',
  border: '1px solid $purple100',
  borderRadius: '$full',
  padding: '$1 $4',
  transition: '0.2s',

  '&:hover': {
    color: '$gray100',
    background: '$purple100',
  },

  variants: {
    active: {
      true: {
        color: '$gray100',
        background: '$purple200',
        borderColor: '$purple200',
      },
    },
  },
})
