import Image from 'next/image'
import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '$4',
  background: '$gray700',
  padding: '$6',
  borderRadius: '$md',
})
export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  marginBottom: '$8',

  section: {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
  },
})

export const BookDetails = styled('div', {
  display: 'flex',
  gap: '$5',
})

export const BookImage = styled(Image, {
  borderRadius: '$sm',
  minWidth: 108,
  objectFit: 'cover',
  transition: '0.2s',

  '&:hover': {
    filter: 'brightness(1.2)',
  },
})

export const BookContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const ToogleShowMoreButton = styled('button', {
  all: 'unset',
  color: '$purple100',
  fontSize: '0.875rem',
  fontWeight: '$bold',
  marginLeft: '$1',
})
