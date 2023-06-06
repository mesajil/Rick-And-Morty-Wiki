const request = require('supertest')
const server = require('../src/routes')
// const agent = session(app);

// Post character
xdescribe(
    "Should reply the POST method with status 200",
    async () => {
        // Get data


        // Send data
        const res = await request(server)
            .post('/character')
            .send()

        // Test response

    }
)


// Test character reading
xdescribe(
    "Should reply the GET method with the list of characters",
    async () => {
        const res = await request(server).get('/character')

        it(
            "The response.body should be a list",
            () => {
                expect(Array.isArray(res.body)).toBe(true);
            }
        )

        it(
            "If the response.body has an element, it is an object and it is a character.",
            () => {
                if (!res.body.length) return
                expect(typeof res.body[0] === 'object').toBe(true);

                expect(res.body[0] !== null).toBe(true);

            }
        )


    }
)

// Get character by id
describe(
    "GET /rickandmorty/character/:id",
    async () => {

        // Get character by id
        const res = await request(server)
            .get('/character/1');

        it(
            "Should reply the GET method with status 200",
            () => {
                expect(res.statusCode).toBe(200)
            }
        )

        it(
            "The character has valid attributes.",
            () => {
                const char = res.body;
                const { id, name, status, image } = char;
                expect(typeof char === 'object').toBeTruthy();
                expect(id).toBe(1);
                expect(name && typeof name === 'string').toBeTruthy();
                expect(status && typeof status === 'string').toBeTruthy();
                expect(image && typeof image === 'string').toBeTruthy();
            }
        )


    }
)

// Test character updating


// Test character deletion

