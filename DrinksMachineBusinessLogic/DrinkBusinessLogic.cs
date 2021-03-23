using System;
using System.Collections.Generic;
using DrinksMachineDataAccess;
using DrinksMachineModels;

namespace DrinksMachineBusinessLogic
{
    public class DrinkBusinessLogic : IDrinkBusinessLogic
    {
        private IDrinkDataAccess drinkDataAccess;

        public DrinkBusinessLogic (IDrinkDataAccess drinkDA)
        {
            this.drinkDataAccess = drinkDA;
        }

        public IEnumerable<Drink> GetDrinks()
        {
            return drinkDataAccess.GetDrinks();
        }
    }
}
