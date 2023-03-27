using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Security.Cryptography;
using System.Text;


namespace Hotsite.Models
{
    public class DatabaseService
    {
        public int CadastraInteresse(Interesse cad)
        {
                
                using(var context = new DatabaseContext())
                {
                    context.Add(cad);
                    context.SaveChanges();
                    return cad.Id;
                }
             
       
        }
    }
}