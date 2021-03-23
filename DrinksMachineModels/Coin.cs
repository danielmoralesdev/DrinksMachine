using System;

namespace DrinksMachineModels
{
    public class Coin
    {
        private int value;
        private string name;
        private int quantity;

        public int Value 
        { 
			set	{ this.value = value; }
			get	{ return this.value;	} 
        }
        public string Name 
        { 
			set	{ this.name = value; }
			get	{ return this.name;	} 
        }
        public int Quantity 
        { 
            
			set	{ this.quantity = value; }
			get	{ return this.quantity;	} 
        }

        public Coin()
        {
            this.value = 0;
            this.name = "";
            this.quantity = 0;
        }

        public Coin(int value, string name, int quantity)
        {
            this.value = value;
            this.name = name;
            this.quantity = quantity;
        }
    }
}
