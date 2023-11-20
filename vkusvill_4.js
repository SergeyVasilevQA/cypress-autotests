describe('тестирование магазина вкуссвилл', function () {
    
    it('провалиться в меню выбора адреса доставки', function () {
        /зайти на сайт/
        cy.visit('https://spb.vkusvill.ru/') 
        cy.get('.HeaderSearchBlock__Input').type('творог');
        cy.get('.HeaderSearchBlock__BtnSearchImg').click();
        cy.get(':nth-child(1) > .Slider__itemInner > .ProductCard > .ProductCard__content > .ProductCard__cartFooter > .ProductCard__cartFooterRow > .ProductCard__cartFooterCol > .ProductCard__cartButton > .CartButton > .CartButton__content--add > .CartButton__inner').click()
    })
})