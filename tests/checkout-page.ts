/**
 * The "app under test" for this demo — a self-contained checkout page the
 * specs render with page.setContent(), so the repo needs no server. A pull
 * request that edits this page is a stand-in for a real app change: tests
 * break, razo narrates why, and the razo GitHub App comments on the PR.
 */
export const CHECKOUT_PAGE = `
<main>
  <h1>Checkout</h1>

  <label>Email <input data-testid="email" /></label>

  <label>Coupon <input data-testid="coupon" /></label>
  <button data-testid="apply-coupon"
    onclick="document.querySelector('[data-testid=discount]').textContent =
      document.querySelector('[data-testid=coupon]').value === 'SAVE10' ? '-$5.00' : 'Invalid coupon'">
    Apply
  </button>
  <p data-testid="discount"></p>

  <table data-testid="items">
    <thead><tr><th>Item</th><th>Price</th></tr></thead>
    <tbody>
      <tr><td>Keyboard</td><td>$45.00</td></tr>
    </tbody>
  </table>

  <button data-testid="place-order" style="display:none"
    onclick="document.querySelector('[data-testid=status]').textContent='Order placed'">
    Place order
  </button>
  <p data-testid="status"></p>
</main>
`;
