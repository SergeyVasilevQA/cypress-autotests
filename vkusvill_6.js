describe('тестирование магазина вкуссвилл', function () {
    
    it('Провалиться в каталог', function () {
        /зайти на сайт/
        cy.visit('https://spb.vkusvill.ru/'); 
        cy.get('#js-header-catalog-shower > ._text').click()
        
    })
})