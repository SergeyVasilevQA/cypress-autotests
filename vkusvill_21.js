describe('тестирование магазина вкуссвилл', function () {
    
    it('Проверка title', function () {
        /зайти на сайт/
        cy.visit('https://spb.vkusvill.ru/') 
        cy.title().should('eq', 'ВкусВилл — интернет-магазин продуктов для здорового питания с доставкой на дом | Санкт-Петербург')
    })
})