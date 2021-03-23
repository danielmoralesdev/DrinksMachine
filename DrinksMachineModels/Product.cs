using System;

namespace DrinksMachineModels
{
    public class Product
    {
        private string name;
        private int cost;
        private int quantity;

        public int Cost
        {
			set	{ this.cost = value; }
			get	{ return this.cost; } 
        }
        public string Name
        {
			set	{ this.name = value; }
			get	{ return this.name; } 
        }
        public int Quantity
        {
			set	{ this.quantity = value; }
			get	{ return this.quantity; } 
        }

        public Product()
        {
            this.name = "";
            this.cost = 0;
            this.quantity = 0;
        }

        public Product(string name, int cost, int quantity)
        {
            this.name = name;
            this.cost = cost;
            this.quantity = quantity;
        }
    }
}
