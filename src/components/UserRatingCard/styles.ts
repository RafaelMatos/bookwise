import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backdropFilter: 'blur(10px) saturate(180%)',
  '-webkit-backdrop-filter': 'blur(16px) saturate(200%)',

  variants: {
    variant: {
      primary: {
        backgroundColor: 'rgba(24, 28, 42, 0.50)',
      },
      highlight: {
        backgroundColor: ' rgba(37, 45, 74, 0.50)',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  marginBottom: '$5',

  '> section': {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
  },
})
