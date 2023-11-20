describe('тестирование магазина вкуссвилл', function () {
    
    it('Провалиться в каталог', function () {
        /зайти на сайт/
        cy.visit('https://spb.vkusvill.ru/'); 
        cy.get('#js-header-catalog-shower > ._text').click();
        cy.contains('Новинки');
        cy.contains('Хиты');
        cy.contains('Готовая еда');
        cy.contains('Овощи, фрукты, ягоды, зелень');
        cy.contains('Молочные продукты, яйцо');
        cy.contains('Хлеб и выпечка');
        cy.contains('Алкоголь');
        
        
    })
})