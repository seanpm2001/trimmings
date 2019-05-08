describe('inline', () => {
  test('standard link', async () => {
    const page = await browser.newPage()
    await page.goto('http://localhost:4444/inline-1.html')
    await expect(page).toClick('a')
    await expect(page).not.toMatch('This is page 2')
    await expect(page).toMatch('Is this what you were expecting?')
  })

  test('fallback link: false target', async () => {
    const page = await browser.newPage()
    await page.goto('http://localhost:4444/inline-1.html')
    await expect(page).toClick('a.false-target')
    await page.waitForNavigation({ timeout: 100 })
    await expect(page.url()).toContain('/inline-2.html')
  })

  test('fallback link: false include', async () => {
    const page = await browser.newPage()
    await page.goto('http://localhost:4444/inline-1.html')
    await expect(page).toClick('a.false-include')
    await page.waitForNavigation({ timeout: 100 })
    await expect(page.url()).toContain('/inline-2.html')
  })

  test('fallback link: bad template', async () => {
    const page = await browser.newPage()
    await page.goto('http://localhost:4444/inline-1.html')
    await expect(page).toClick('a.false-template')
    await page.waitForNavigation({ timeout: 100 })
    await expect(page.url()).toContain('/inline-2.html')
  })

  test('standard form', async () => {
    const page = await browser.newPage()
    await page.goto('http://localhost:4444/inline-1.html')
    await expect(page).toClick('button.good')
    await expect(page).not.toMatch('This is page 2')
    await expect(page).toMatch('Is this what you were expecting?')
  })

  test('form fallback: false include', async () => {
    const page = await browser.newPage()
    await page.goto('http://localhost:4444/inline-1.html')
    await expect(page).toClick('button.bad')
    await page.waitForNavigation({ timeout: 100 })
    await expect(page.url()).toContain('/inline-2.html?foo=bar')
  })

  test('template', async () => {
    const page = await browser.newPage()
    await page.goto('http://localhost:4444/inline-template.html')
    await expect(page).toClick('a')
    await expect(page).toMatchElement('.inline-target .template-body .include')
  })

  describe('methods', () => {
    test('prepend', async () => {
      const page = await browser.newPage()
      await page.goto('http://localhost:4444/inline-method.html')
      await expect(page).toClick('a.prepend')
      await expect(page).toMatchElement('.include + .child-1 + .child-2 + .child-3')
    })

    test('append', async () => {
      const page = await browser.newPage()
      await page.goto('http://localhost:4444/inline-method.html')
      await expect(page).toClick('a.append')
      await expect(page).toMatchElement('.child-1 + .child-2 + .child-3 + .include')
    })

    test('reduce-prepend', async () => {
      const page = await browser.newPage()
      await page.goto('http://localhost:4444/inline-method.html')
      await expect(page).toClick('a.reduce-prepend')
      await expect(page).toMatchElement('.include:first-child + .child-2:last-child')
    })

    test('reduce-append', async () => {
      const page = await browser.newPage()
      await page.goto('http://localhost:4444/inline-method.html')
      await expect(page).toClick('a.reduce-append')
      await expect(page).toMatchElement('.child-2:first-child + .include:last-child')
    })
  })
})
