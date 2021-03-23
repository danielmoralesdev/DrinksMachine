using System;

namespace DrinksMachineModels
{
    public class Drink : Product
    {
        public Drink() : base()
        {
        }

        public Drink(string name, int cost, int quantity) : base(name, cost, quantity)
        {
        }
    }
}
