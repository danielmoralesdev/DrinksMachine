using System;
using DrinksMachineModels;

namespace DrinksMachineDataAccess
{
    public interface IOrderDataAcces
    {
        public DataResult InsertOrder(Order order);
    }
}
