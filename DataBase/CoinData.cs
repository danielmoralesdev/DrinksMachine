using System;
using System.Collections.Generic;
using DrinksMachineModels;

namespace DataBase
{
    public class CoinData
    {
        private IEnumerable<Coin> coins;
        public IEnumerable<Coin> Coins
        {
			set	{ this.coins = value; }
			get	{ return this.coins; } 
        }

        public CoinData()
        {
            this.coins = InitializeCoins();
        }
        
        //Method to initialize data coins
        private IEnumerable<Coin> InitializeCoins()
        {
            var list = new List<Coin>();

            list.Add(new Coin(1, "Penny", 100));
            list.Add(new Coin(5, "Nickel", 10));
            list.Add(new Coin(10, "Dime", 5));
            list.Add(new Coin(25, "Quarter", 25));

            return list;
        }
    }
}
