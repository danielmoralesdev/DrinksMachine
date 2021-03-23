using System;
using DrinksMachineModels;
using DrinksMachineDataAccess;


namespace DrinksMachineBusinessLogic
{
    public class OrderBusinessLogic : IOrderBusinessLogic
    {
        private OrderDataAccess orderDataAccess;

        public OrderBusinessLogic(OrderDataAccess orderDA)
        {
            this.orderDataAccess = orderDA;
        }

        public DataResult InsertOrder(Order order)
        {
            return orderDataAccess.InsertOrder(order);
        }
    }
}
