import { faker } from '@faker-js/faker'

export function generateUsersArray(numberOfUser = 1) {
  return Array.from({ length: numberOfUser }).map((_, i) => {
    return {
      id: faker.string.uuid(),
      email: faker.internet.email(),
      name: faker.person.fullName(),
      avatar_url: faker.image.avatar(),
      created_at: faker.date.past(),
    }
  })
}

export function generateSingleUser(avatarUrl?: string) {
  return {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    avatar_url: avatarUrl || faker.image.avatar(),
    created_at: faker.date.past(),
  }
}
