import { styled } from '../../../../stitches.config'

export const TextAreaContainer = styled('div', {
  background: '$gray800',
  border: '1px solid currentColor',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  borderRadius: '$sm',
  color: '$gray500',
  transition: '0.2s',

  '&:focus-within': {
    color: '$green200',
  },

  textarea: {
    flex: 1,
    padding: '0.875rem $5',
    background: 'none',
    border: 'none',
    color: '$gray100',
    fontSize: '0.875rem',
    resize: 'none',
    minHeight: 136,

    '&::placeholder': {
      color: '$gray400',
    },
    '&:focus': {
      outline: 'none',
    },

    '&::-webkit-scrollbar': {
      width: 6,
    },
    '&::-webkit-scrollbar-track': {
      background: '$gray700',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '$gray600',
    },
  },

  span: {
    color: '#7c7c8a',
    fontSize: '$xs',
    marginLeft: 'auto',
    paddingRight: '$2',
    paddingBottom: '$1',
  },
})
