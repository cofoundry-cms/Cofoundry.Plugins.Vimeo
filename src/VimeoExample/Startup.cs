﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Cofoundry.Web;
using Microsoft.Extensions.Configuration;

namespace VimeoExample
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddMvc()
                .AddCofoundry(Configuration);
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseCofoundry();
        }
    }
}
