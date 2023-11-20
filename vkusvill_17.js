describe('тестирование магазина вкуссвилл', function () {
    
    it('Провалиться в каталог,в раздел "мясо ,птица"', function () {
        /зайти на сайт/
        cy.visit('https://spb.vkusvill.ru/'); 
        cy.get('#js-header-catalog-shower > ._text').click();
       
        
        cy.get(':nth-child(9) > .VVCategCards2020__Item > .VVCategCards2020__ItemTitle').click()
        cy.contains('товаров')






    })
})