import { faker } from '@faker-js/faker'

export function generateBooksArray(numberOfUser = 1) {
  return Array.from({ length: numberOfUser }).map((_, i) => {
    return {
      id: faker.string.uuid(),
      name: faker.finance.accountName(),
      author: faker.person.fullName(),
      summary: faker.lorem.sentence(),
      cover_url: faker.image.avatarLegacy(),
      total_pages: faker.number.int({ min: 10, max: 999 }),
      created_at: faker.date.past(),
    }
  })
}

export function generateSingleBook() {
  const subjectName = faker.animal.type()
  return {
    id: faker.string.uuid(),
    name: subjectName,
    author: faker.person.fullName(),
    summary: faker.lorem.text(),
    cover_url: faker.image.urlLoremFlickr({
      category: subjectName,
    }),
    total_pages: faker.number.int({ min: 10, max: 999 }),
    created_at: faker.date.past(),
  }
}
