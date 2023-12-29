import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../../stitches.config'
import Image from 'next/image'

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  background: '#00000099',
})

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  width: 660,
  height: '100%',
  boxShadow: '-4px 0px 30px #00000080',
  backdropFilter: 'blur(10px) saturate(180%)',
  '-webkit-backdrop-filter': 'blur(16px) saturate(200%)',
  backgroundColor: ' rgba(14, 17, 22, 0.50)',
  borderRadius: '12px 0 0 12px',
  borderLeft: '1px solid rgba(255, 255, 255, 0.125)',
  padding: '$6 48px',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  transition: '0.2s ease-in-out',

  '&::-webkit-scrollbar': {
    width: 6,
  },
  '&::-webkit-scrollbar-track': {
    background: '$gray700',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '$gray600',
  },
})

export const DialogClose = styled(Dialog.Close, {
  color: '$gray400',
  background: 'none',
  border: 'none',
  marginLeft: 'auto',
  marginBottom: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.2s ease-in-out',
  '&:hover': {
    scale: 1.1,
  },
})

export const BookDetailsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backdropFilter: 'blur(10px) saturate(180%)',
  '-webkit-backdrop-filter': 'blur(16px) saturate(200%)',
  backgroundColor: 'rgba(24, 28, 42, 0.50)',
  padding: '$6 $8',
  borderRadius: '$md',
})
export const BookDetailsContainer = styled('div', {
  display: 'flex',
  gap: '$8',
})
export const BookImage = styled(Image, {
  borderRadius: '$md',
  objectFit: 'cover',
  minWidth: 171,
})

export const BookContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})
export const BookInfos = styled('div', {
  marginTop: '$10',
  paddingTop: '$6',
  borderTop: '1px solid $gray600',
  display: 'flex',
  gap: 60,
})
