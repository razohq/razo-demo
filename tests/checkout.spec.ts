import { test } from '@playwright/test';
import { Button, Input, Label, Table } from '@razohq/razo';
import { CHECKOUT_PAGE } from './checkout-page';

test.beforeEach(async ({ page }) => {
  await page.setContent(CHECKOUT_PAGE);
});

test('a valid coupon applies a discount', async ({ page }) => {
  await new Input(page, 'email', 'Email').fill('demo@razo.ar');
  await new Input(page, 'coupon', 'Coupon').fill('SAVE10');
  await new Button(page, 'apply-coupon', 'Apply coupon').click();
  await new Label(page, 'discount', 'Discount').expectText('-$5.00');
});

test('an invalid coupon shows an inline error', async ({ page }) => {
  await new Input(page, 'coupon', 'Coupon').fill('NOPE123');
  await new Button(page, 'apply-coupon', 'Apply coupon').click();
  await new Label(page, 'discount', 'Discount').expectText('Invalid coupon');
});

test('the cart lists both items', async ({ page }) => {
  const items = new Table(page, 'items', 'Cart items');
  await items.expectRowCount(2);
  await items.expectRowContains('Keyboard');
});

test('placing the order confirms it', async ({ page }) => {
  await new Input(page, 'email', 'Email').fill('demo@razo.ar');
  await new Button(page, 'place-order', 'Place order').click();
  await new Label(page, 'status', 'Order status').expectText('Order placed');
});
