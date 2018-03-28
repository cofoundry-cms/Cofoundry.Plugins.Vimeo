﻿using Cofoundry.Domain;
using Cofoundry.Plugins.Vimeo.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VimeoExampleModule
{
    public class VimeoVideoDataModel : IPageBlockTypeDataModel, IPageBlockTypeDisplayModel
    {
        [Required]
        [Vimeo]
        public VimeoVideo Video { get; set; }
    }
}
