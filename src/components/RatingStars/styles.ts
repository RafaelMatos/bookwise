import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  // alignSelf: 'stretch',

  svg: {
    color: '$purple100',
    boxSizing: 'content-box',

    '&:first-child': {
      paddingLeft: 0,
    },
  },

  variants: {
    size: {
      sm: {
        svg: {
          padding: '0 $px',
          width: 14,
          height: 14,
        },
      },
      md: {
        svg: {
          padding: '0 $px',
          width: 20,
          height: 20,
        },
      },
      lg: {
        svg: {
          padding: '0 $px',
          width: 24,
          height: 24,
        },
      },
    },
  },
})
