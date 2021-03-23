using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DrinksMachineUI.Models;
using DrinksMachineModels;
using DrinksMachineDataAccess;
using DrinksMachineBusinessLogic;

namespace DrinksMachineUI.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        
        [HttpGet]
        public JsonResult GetCoins()
        {
            var coinBL = new CoinBusinessLogic(new CoinDataAccess());

            var datos = Json(coinBL.GetCoins());

            return datos;
        }
        
        [HttpGet]
        public JsonResult GetDrinks()
        {
            var drinkBL = new DrinkBusinessLogic(new DrinkDataAccess());

            var datos = Json(drinkBL.GetDrinks());

            return datos;
        }
        
        [HttpPost]
        public JsonResult InsertOrder(Order order, int num)
        {
            Order o = new Order();
            var orderBL = new OrderBusinessLogic(new OrderDataAccess());

            var datos = Json(orderBL.InsertOrder(order));

            return datos;
        }
    }
}
