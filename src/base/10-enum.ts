enum OrderStatus {
  PENDING = "pending",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
  CANCELED = "canceled",
}

function getOrderStatus(order: { status: OrderStatus }) {
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

const order = { status: OrderStatus.SHIPPED };
console.log(getOrderStatus(order));