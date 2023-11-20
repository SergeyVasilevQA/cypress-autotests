describe('тестирование магазина вкуссвилл', function () {
    
    it('Проверка поиска', function () {
        /зайти на сайт/
        cy.visit('https://spb.vkusvill.ru/') 
        cy.get('.HeaderSearchBlock__Input').type('творог');
        cy.get('.HeaderSearchBlock__BtnSearchImg').click()
        
    })
})