import { Locator, Page } from "@playwright/test";

export class Link1Page {
    readonly page: Page;
    readonly answerField: Locator;
    readonly submitButton: Locator; 
    readonly toggleFlagButton: Locator;
    readonly link1Tab: Locator;
    constructor(page: Page) {
        this.page = page; 
        this.answerField = page.locator(`[placeholder=ここに回答を入力してください]`);
        this.submitButton = page.locator(`text=回答を送信する`);
        this.toggleFlagButton = page.locator(`text=フラグを立てたり下げたり`);
        this.link1Tab = page.locator(`text=リンク1`);
    }
    async submitAnswer(text:string) {
        await this.answerField.fill(text);
        await this.submitButton.click();
    }
    async toggleFlag() {
        await this.toggleFlagButton.click();
    }
    async goto() {
        this.link1Tab.click();
    }
}