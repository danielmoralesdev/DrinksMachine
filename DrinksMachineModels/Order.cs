using System;
using System.Collections.Generic;

namespace DrinksMachineModels
{
    public class Order
    {
        private IEnumerable<Drink> orderedDrinks;
        private IEnumerable<Coin> insertedCoins;

        public IEnumerable<Drink> OrderedDrinks 
        { 
			set	{ this.orderedDrinks = value; }
			get	{ return this.orderedDrinks; }
        }

        public IEnumerable<Coin> InsertedCoins
        { 
			set	{ this.insertedCoins = value; }
			get	{ return this.insertedCoins; } 
        }
    }
}
