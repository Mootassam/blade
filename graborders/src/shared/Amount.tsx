export default class Amount {
    static USDT(amount) {
        if (!amount) {
            return "0.00 USDT";
        }
        let formattedAmount = amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        return formattedAmount.replace('$', '') + ' USDT';
    }
}
