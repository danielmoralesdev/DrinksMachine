using System;
using System.Collections.Generic;
using DrinksMachineModels;

namespace DataBase
{
    public class DrinkData
    {
        private IEnumerable<Drink> drinks;
        public IEnumerable<Drink> Drinks
        {
			set	{ this.drinks = value; }
			get	{ return this.drinks; } 
        }

        public DrinkData()
        {
            this.drinks = InitializeDrinks();
        }

        public DrinkData(int soldCokes, int soldPepsis, int soldSodas)
        {
            this.drinks = UpdatedDrinks(soldCokes, soldPepsis, soldSodas);
        }

        //Method to initialize data drinks
        private IEnumerable<Drink> InitializeDrinks()
        {
            var list = new List<Drink>();

            list.Add(new Drink("Coke", 25, 5));
            list.Add(new Drink("Pepsi", 36, 15));
            list.Add(new Drink("Soda", 45, 3));

            return list;
        }

        //Method to update data drinks
        private IEnumerable<Drink> UpdatedDrinks(int soldCokes, int soldPepsis, int soldSodas)
        {
            var list = new List<Drink>();

            list.Add(new Drink("Coke", 25, 5 - soldCokes));
            list.Add(new Drink("Pepsi", 36, 15 - soldPepsis));
            list.Add(new Drink("Soda", 45, 3 - soldSodas));

            return list;
        }
    }
}
