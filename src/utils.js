export const formatMoney = (amount, currency="USD") => {
    let price = (amount).toFixed(2)
    let numberFormat = new Intl.NumberFormat(["en-US"], {
      style: "currency",
      currency: currency,
      currencyDisplay: "symbol",
    })
    return numberFormat.format(price)
  }

export function getProductStatus(product) {
  let product_status;
  if (product.status === 'active') {
      if (product.on_sale) {
          product_status = 'On Sale';
      }
  } else if (product.status === 'sold-out') {
      product_status = 'Sold out';
  } else if (product.status === 'coming-soon') {
      product_status = 'Coming soon';
  }
  return product_status;
}