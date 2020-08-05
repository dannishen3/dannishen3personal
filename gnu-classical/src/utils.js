export const formatMoney = (amount, currency="USD") => {
    let price = (amount).toFixed(2)
    let numberFormat = new Intl.NumberFormat(["en-US"], {
      style: "currency",
      currency: currency,
      currencyDisplay: "symbol",
    })
    return numberFormat.format(price)
  }
