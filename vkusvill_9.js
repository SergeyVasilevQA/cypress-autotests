describe('тестирование магазина вкуссвилл', function () {
    
    it('Провалиться в каталог,проскролить и провалиться в нужный раздел', function () {
        /зайти на сайт/
        cy.visit('https://spb.vkusvill.ru/'); 
        cy.get('#js-header-catalog-shower > ._text').click();
        cy.get(':nth-child(1) > .VVCategCards2020__Item > .VVCategCards2020__ItemTitle').click()
        cy.contains('товаров')
        
        
        
    })
})




