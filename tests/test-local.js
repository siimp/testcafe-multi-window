import { Selector } from 'testcafe';

fixture `A local server`
    .page `http://127.0.0.1:8080`;

test('Test with button', async t => {
    await t
        .expect(Selector('h1').textContent).eql('This is index page')
        .click(Selector('button'));

    await t
        .expect(Selector('h1').textContent).eql('This is other page')
        .click(Selector('button'));

    await t
         .expect(Selector('h1').textContent).eql('This is index page');
});

test('Test with link', async t => {
    await t
        .expect(Selector('h1').textContent).eql('This is index page')
        .click(Selector('a'));

    await t
        .expect(Selector('h1').textContent).eql('This is other page')
        .click(Selector('button'));

    await t
        .expect(Selector('h1').textContent).eql('This is index page');
});
