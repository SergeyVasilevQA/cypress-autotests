describe('тестирование магазина вкуссвилл', function () {
    
    it('выбор самовывоза и выбор магазина для самовывоза', function () {
        /зайти на сайт/
        cy.visit('https://spb.vkusvill.ru/') 
        cy.get('.HeaderATDToggler__Text').click();
        cy.get('._not_active').click();
        cy.get('.VV_RWayModalMap__ListShopsShowerText').click();
        
    })
})












