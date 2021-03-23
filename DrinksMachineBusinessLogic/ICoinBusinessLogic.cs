using System;
using System.Collections.Generic;
using DrinksMachineModels;

namespace DrinksMachineBusinessLogic
{
    public interface ICoinBusinessLogic
    {
        public IEnumerable<Coin> GetCoins(); 
    }
}
