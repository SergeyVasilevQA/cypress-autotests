describe('Яндекс лавка', function () {
    
    it('поиск', function () {
        /зайти на сайт/
        cy.visit('https://lavka.yandex.ru/2?ref=yandex-all&utm_source=yandex-desktop-all') 
        cy.get('input').should('have.value', '');
        cy.get('input[type="search"]').type('кукуруза').should('have.value', 'кукуруза');
        
    })
})