describe('тестирование магазина вкуссвилл', function () {
    
    it('Провалиться в каталог,в раздел "Молочные продукты,яйцо"', function () {
        /зайти на сайт/
        cy.visit('https://spb.vkusvill.ru/'); 
        cy.get('#js-header-catalog-shower > ._text').click();
        
        cy.get(':nth-child(6) > .VVCategCards2020__Item > .VVCategCards2020__ItemTitle').click();
        

    

    })
})