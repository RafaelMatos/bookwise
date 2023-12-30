import { useSession } from 'next-auth/react'
import {
  ActionsContainer,
  Container,
  FormContainer,
  UserDetails,
} from './styles'
import { Avatar } from '../ui/Avatar'
import { Heading } from '../Typography'
import RatingStars from '../RatingStars'
import { FormEvent, useState } from 'react'
import { Check, X } from '@phosphor-icons/react'
import { TextArea } from '../Form/TextArea'
import { ActionIcon } from '../ui/Actionicon'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/axios'

type RatingFormProps = {
  onCancel: () => void
  bookId: string
}

export const RatingForm = ({ bookId, onCancel }: RatingFormProps) => {
  const { data: session } = useSession()

  const [description, setDescription] = useState('')
  const [currentRate, setCurrentRate] = useState(0)

  const submitDisabled = !description.trim() // || !currentRate

  const queryClient = useQueryClient()

  const { mutateAsync: handleRate } = useMutation({
    mutationFn: async () => {
      await api.post(`/books/${bookId}/rate`, {
        description,
        rate: currentRate,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['book', bookId],
      })
      queryClient.invalidateQueries({
        queryKey: ['books'],
      })
      onCancel()
    },
  })

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (submitDisabled) return
    await handleRate()
  }

  const user = session?.user
  return (
    <Container>
      {user && (
        <UserDetails>
          <section>
            <Avatar src={user.avatar_url} alt={user.name} />
            <Heading size="xs">{user.name}</Heading>
          </section>
          <RatingStars
            size="lg"
            rating={currentRate}
            setRating={setCurrentRate}
          />
        </UserDetails>
      )}
      <FormContainer onSubmit={handleSubmit}>
        <TextArea
          maxLength={450}
          placeholder="Escreva sua avaliação"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        ></TextArea>
        <ActionsContainer>
          <ActionIcon
            type="button"
            icon={<X />}
            iconColor="purple100"
            onClick={onCancel}
          />
          <ActionIcon
            type="submit"
            icon={<Check />}
            iconColor="green100"
            disabled={submitDisabled}
          />
        </ActionsContainer>
      </FormContainer>
    </Container>
  )
}
