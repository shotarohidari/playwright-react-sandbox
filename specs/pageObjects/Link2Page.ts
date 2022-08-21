import { Locator, Page } from "@playwright/test";

export class Link2Page {
    readonly page: Page;
    readonly link2Tab: Locator;
    readonly fooContent: Locator;
    constructor(page: Page) {
        this.page = page; 
        this.link2Tab = page.locator(`text=リンク2`);
        this.fooContent = page.locator(`text=フーが表示されています！`);
    }
    async getFooText() {
        return await this.fooContent.innerText({timeout:1500});
    }
    async goto() {
        this.link2Tab.click();
    }
}