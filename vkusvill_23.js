describe('тестирование магазина вкуссвилл', function () {
    
    it('Проверка наличия номеров телефонов  ', function () {
        /зайти на сайт/
        cy.visit('https://spb.vkusvill.ru/') 
        cy.contains('+7(495)663-86-02');
        cy.contains('8 800 550-86-02');
        cy.contains('+7(495)663-86-02');
        cy.contains('8 800 550-86-02');
        cy.contains('+7(495)902-66-97');
        cy.contains('8 800 707-66-97')
        
    })
})