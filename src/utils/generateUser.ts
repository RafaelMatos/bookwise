import { faker } from '@faker-js/faker'

export function generateUsersArray(numberOfUser = 1) {
  return Array.from({ length: numberOfUser }).map((_, i) => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    return {
      id: faker.string.uuid(),
      email: faker.internet.email({
        firstName,
        lastName,
      }),
      name: faker.person.fullName(),
      avatar_url: faker.image.avatar(),
      created_at: new Date(),
    }
  })
}

export function generateSingleUser() {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  return {
    id: faker.string.uuid(),
    email: faker.internet.email({
      firstName,
      lastName,
    }),
    name: faker.person.fullName(),
    avatar_url: faker.image.avatar(),
    created_at: new Date(),
  }
}
