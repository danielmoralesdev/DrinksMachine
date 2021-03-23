using System;
using System.Collections.Generic;
using DrinksMachineDataAccess;
using DrinksMachineModels;

namespace DrinksMachineBusinessLogic
{
    public interface IDrinkBusinessLogic
    {
        public IEnumerable<Drink> GetDrinks();
    }
}
