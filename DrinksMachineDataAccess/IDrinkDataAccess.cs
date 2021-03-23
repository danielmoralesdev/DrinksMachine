using System;
using System.Collections.Generic;
using DrinksMachineModels;

namespace DrinksMachineDataAccess
{
    public interface IDrinkDataAccess
    {
        public IEnumerable<Drink> GetDrinks();
    }
}
