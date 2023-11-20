describe('тестирование магазина вкуссвилл', function () {
    
    it('Проверка наличия кнопки Заказать', function () {
        /зайти на сайт/
        cy.visit('https://spb.vkusvill.ru/') 
        cy.contains('Заказать')
        
    })
})