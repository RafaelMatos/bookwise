import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  backdropFilter: 'blur(10px) saturate(180%)',
  '-webkit-backdrop-filter': 'blur(16px) saturate(200%)',
  backgroundColor: 'rgba(24, 28, 42, 0.50)',

  padding: '$6',
  borderRadius: '$md',
})

export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '> section': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
  },
})

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  marginTop: '$6',
})

export const ActionsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '$2',
})
