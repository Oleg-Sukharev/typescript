var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "pending";
    OrderStatus["SHIPPED"] = "shipped";
    OrderStatus["DELIVERED"] = "delivered";
    OrderStatus["CANCELED"] = "canceled";
})(OrderStatus || (OrderStatus = {}));
function getOrderStatus(order) {
    switch (order.status) {
        case OrderStatus.PENDING:
            return "Your order is being processed.";
        case OrderStatus.SHIPPED:
            return "Your order is on the way!";
        case OrderStatus.DELIVERED:
            return "Your order has been delivered!";
        case OrderStatus.CANCELED:
            return "Your order was canceled.";
        default:
            return "Unknown status.";
    }
}
var order = { status: OrderStatus.SHIPPED };
console.log(getOrderStatus(order));
