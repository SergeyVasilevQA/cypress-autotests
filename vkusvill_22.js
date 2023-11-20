describe('тестирование магазина вкуссвилл', function () {
    
    it('Проверка поиска нажатием клавиши ентер', function () {
        /зайти на сайт/
        cy.visit('https://spb.vkusvill.ru/') 
        cy.get('.HeaderSearchBlock__Input').type('творог').type('{enter}')
        
        

        
    })
})