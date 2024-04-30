import { faker } from '@faker-js/faker';

    export function getFakeFirstName(): string {
        return faker.person.firstName();
    }

    export function getFakeLastName(): string {
        return faker.person.lastName();
    }

    export function getFakeEmail(): string {
        return faker.internet.email();
    }

    export function getFakePassword(): string {
        return faker.internet.password();
    }