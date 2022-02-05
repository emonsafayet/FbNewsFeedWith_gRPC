﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Entities.Dto
{
    public class DtoBase
    {
        public int Id { get; set; }
        public DateTime CreatedOn { get; set; }  = DateTime.UtcNow;  

    }
}
