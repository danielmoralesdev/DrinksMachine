using System;
using DataBase;
using System.Collections.Generic;
using DrinksMachineModels;

namespace DrinksMachineDataAccess
{
    public class CoinDataAccess : ICoinDataAccess
    {
        private DataBaseCon dataBase;

        public CoinDataAccess ()
        {
            this.dataBase = new DataBaseCon();
        }

        public IEnumerable<Coin> GetCoins()
        {
            return this.dataBase.CoinData.Coins;
        }
    }
}
