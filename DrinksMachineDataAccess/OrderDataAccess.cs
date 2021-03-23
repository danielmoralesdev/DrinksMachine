using System;
using System.Collections.Generic;
using DataBase;
using DrinksMachineModels;

namespace DrinksMachineDataAccess
{
    public class OrderDataAccess : IOrderDataAcces
    {
        private DataBaseCon dataBase;

        public OrderDataAccess ()
        {
            this.dataBase = new DataBaseCon();
        }

        public DataResult InsertOrder(Order order)
        {
            dataBase.UpdateData(order.InsertedCoins, order.OrderedDrinks);
            
            var dataResult = new DataResult();
            dataResult.Drinks = dataBase.DrinkData.Drinks;
            dataResult.Coins = dataBase.CoinData.Coins;

            return dataResult;
        }
    }
}
