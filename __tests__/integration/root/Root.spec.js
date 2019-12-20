describe('Root page', () => {
    test('should load', async () => {
        await page.goto('http://localhost:5555');
    });
});