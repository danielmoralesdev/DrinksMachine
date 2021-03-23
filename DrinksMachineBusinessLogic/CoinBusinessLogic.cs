using System;
using System.Collections.Generic;
using DrinksMachineDataAccess;
using DrinksMachineModels;

namespace DrinksMachineBusinessLogic
{
    public class CoinBusinessLogic : ICoinBusinessLogic
    {
        private ICoinDataAccess coinDataAccess;

        public CoinBusinessLogic (ICoinDataAccess coinDataAccess)
        {
            this.coinDataAccess = coinDataAccess;
        }

        public IEnumerable<Coin> GetCoins()
        {
            return coinDataAccess.GetCoins();
        }
    }
}
