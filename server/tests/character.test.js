const request = require('supertest')
const server = require('../src/routes')

// Test character creation
describe(
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
describe(
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

// Test character updating


// Test character deletion

