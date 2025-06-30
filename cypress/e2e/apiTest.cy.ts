describe('API Testing', () => {
    it('PUT Request', () => {
        cy.request({
            'url': 'https://reqres.in/api/users/2',
            'method': 'PUT',
            'headers': {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1'
            },
            'body': {
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then((res) => {
            expect(res.status).to.be.eq(200)
            cy.log(JSON.stringify(res.body))
        })
    })

    it('POST Request', () => {
        cy.fixture('userData').then((data) => {
            cy.request({
                'url': 'https://reqres.in/api/users/',
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json',
                    'x-api-key': 'reqres-free-v1'
                },
                'body': data
            }).then((res) => {
                expect(res.status).to.be.eq(201 )
                cy.writeFile('cypress/fixtures/responseData.json', JSON.stringify(res.body))
            })
        })
    })

    it('GET Request', () => {
        cy.request({
            'url': 'https://reqres.in/api/users/2',
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1'
            }
        }).then((res) => {
            expect(res.status).to.be.eq(200 )
            cy.log(JSON.stringify(res.body))
            const userId = res.body.data.id
            cy.then(()=>{
                cy.request({
                    'url':'https://reqres.in/api/users/' + res.body.data.id,
                    'method':'GET',
                    'headers': {
                        'Content-Type': 'application/json',
                        'x-api-key': 'reqres-free-v1'
                    }
                }).then((res) => {
                    cy.log(JSON.stringify(res))
                })
            })
        })
    })

    it('API Intercept', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET','/posts').as('posts')
        cy.get("table:nth-child(5) a[href='/posts']").click()
        cy.wait('@posts').then((res)=>{
            cy.log(JSON.stringify(res.response?.body))
        })
    })

    it('API Stubbing', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET','/posts', {fixture: 'example.json'}).as('posts')
        cy.get("table:nth-child(5) a[href='/posts']").click()
        cy.wait('@posts').then((res)=>{
            cy.log(JSON.stringify(res.response?.body))
        })
    })
})