using System.Linq;
using System.Collections.Generic;
using DrinksMachineModels;

namespace DataBase
{
    public class DataBaseCon
    {
        private CoinData coinData;
        private DrinkData drinkData;

        public CoinData CoinData 
        { 
			set	{ this.coinData = value; }
			get	{ return this.coinData;	} 
        }
        public DrinkData DrinkData
        {
			set	{ this.drinkData = value; }
			get	{ return this.drinkData; } 
        }

        public DataBaseCon ()
        {
            this.coinData = new CoinData();
            this.drinkData = new DrinkData();
        }

        // Method to update de data
        public void UpdateData(IEnumerable<Coin> coins, IEnumerable<Drink> drinks)
        {
            CoinData.Coins = coins;

            var soldCokes = (from d in drinks where d.Name == "Coke" select d.Quantity).First();
            var soldPepsis = (from d in drinks where d.Name == "Pepsi" select d.Quantity).First();
            var soldSodas = (from d in drinks where d.Name == "Soda" select d.Quantity).First();

            DrinkData = new DrinkData(soldCokes, soldPepsis, soldSodas);
        }
    }
}
