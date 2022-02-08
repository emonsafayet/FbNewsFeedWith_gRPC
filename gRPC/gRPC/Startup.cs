using Data.Entities.AppDbContext;
using DemoGrpc.Web.Services;
using DemoGrpc.Web.Services.V1;
using Domain.Services.Users;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Threading.Tasks;
using AutoMapper;

namespace gRPC
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddGrpc();
            services.AddDbContext<AppDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddCors(o =>
            {
                o.AddPolicy("MyPolicy", builder =>
                {
                    builder.AllowAnyOrigin();
                    builder.AllowAnyMethod();
                    builder.AllowAnyHeader();
                    builder.WithExposedHeaders("Grpc-Status", "Grpc-Message");
                });
            });
            services.AddAutoMapper(Assembly.Load("gRPC"));
            services.AddSingleton<ProtoService>();
            services.AddScoped<IUserService, UserService>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors("MyPolicy");
            app.UseGrpcWeb();

            app.UseEndpoints(endpoints =>
            {
                var protoService = endpoints.ServiceProvider.GetRequiredService<ProtoService>();

                endpoints.MapGrpcService<UserGRPCService>().RequireCors("MyPolicy").EnableGrpcWeb();

                endpoints.MapGet("/protos", async context =>
                {
                    await context.Response.WriteAsync(await protoService.Get());
                });

                endpoints.MapGet("/protos/v{version:int}/{protoName}", async context =>
                {
                    var version = int.Parse((string)context.Request.RouteValues["version"]);
                    var protoName = (string)context.Request.RouteValues["protoName"];

                    var filePath = protoService.Get(version, protoName);

                    if (filePath != null)
                    {
                        await context.Response.SendFileAsync(filePath);
                    }
                    else
                    {
                        context.Response.StatusCode = (int)HttpStatusCode.NotFound;
                    }
                });
            });
        }
    }
}
