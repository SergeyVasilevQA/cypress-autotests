describe('тестирование магазина вкуссвилл', function () {
    
    it('Провалиться в каталог,в раздел "доставка рационов"', function () {
        /зайти на сайт/
        cy.visit('https://spb.vkusvill.ru/'); 
        cy.get('#js-header-catalog-shower > ._text').click();
        cy.get(':nth-child(4) > .VVCategCards2020__Item > .VVCategCards2020__ItemTitle').click()
        cy.contains('товаров')
        
  })
})