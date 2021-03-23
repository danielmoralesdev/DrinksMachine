using System;
using DrinksMachineModels;
using DrinksMachineDataAccess;

namespace DrinksMachineBusinessLogic
{
    public interface IOrderBusinessLogic
    {
        public DataResult InsertOrder(Order order);
    }
}
