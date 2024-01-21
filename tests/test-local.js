import { Selector } from 'testcafe';

fixture `A local server`
    .page `http://127.0.0.1:8080`;

test('Text separate wait', async t => {
    // separate
    await t
        .expect(Selector('h1').textContent).eql('This is index page')
        .click(Selector('button'));

    await t
        .expect(Selector('h1').textContent).eql('This is other page')
        .click(Selector('button'));

    await t
         .expect(Selector('h1').textContent).eql('This is index page');
});

test('Text single wait', async t => {
    await t
        .expect(Selector('h1').textContent).eql('This is index page')
        .click(Selector('button'))
        .expect(Selector('h1').textContent).eql('This is other page')
        .click(Selector('button'))
        .expect(Selector('h1').textContent).eql('This is index page');
});