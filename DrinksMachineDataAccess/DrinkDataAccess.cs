using System;
using System.Collections.Generic;
using DataBase;
using DrinksMachineModels;

namespace DrinksMachineDataAccess
{
    public class DrinkDataAccess : IDrinkDataAccess
    {
        private DataBaseCon dataBase;

        public DrinkDataAccess ()
        {
            this.dataBase = new DataBaseCon();
        }

        public IEnumerable<Drink> GetDrinks()
        {
            return dataBase.DrinkData.Drinks;
        }
    }
}
