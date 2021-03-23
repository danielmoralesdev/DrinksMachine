using System;
using System.Collections.Generic;
using DrinksMachineModels;

namespace DrinksMachineDataAccess
{
    public interface ICoinDataAccess
    {
        public IEnumerable<Coin> GetCoins(); 
    }
}
