using System;
using System.Collections.Generic;

namespace DrinksMachineModels
{
    public class DataResult
    {
        private IEnumerable<Drink> drinks;
        private IEnumerable<Coin> coins;

        public IEnumerable<Drink> Drinks 
        { 
			set	{ this.drinks = value; }
			get	{ return this.drinks; }
        }

        public IEnumerable<Coin> Coins
        { 
			set	{ this.coins = value; }
			get	{ return this.coins; } 
        }
    }
}
