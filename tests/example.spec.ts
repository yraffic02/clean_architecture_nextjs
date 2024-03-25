import { test, expect } from "@playwright/test";

test("test open page home and register", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.getByRole("link", { name: "Adicionar Carro" }).click();

  await expect(page).toHaveURL("http://localhost:3000/novo-carro");
});

test("register car", async ({ page }) => {
  await page.goto("http://localhost:3000/novo-carro");

  await page.getByPlaceholder("Marca").fill("Fiat");

  await page.getByPlaceholder("Modelo").fill("Uno");

  await page.getByPlaceholder("Ano").fill("2018");

  await page.getByRole("button", { name: "Cadastrar" }).click();

  await expect(page.getByText("Promise is pending")).toBeVisible();
});
