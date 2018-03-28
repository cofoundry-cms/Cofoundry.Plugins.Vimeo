using Cofoundry.Core.ResourceFiles;
using Cofoundry.Web.Admin;
using System;
using System.Collections.Generic;
using System.Text;

namespace Cofoundry.Plugins.Vimeo.Admin
{
    public class EmbeddedResourceRouteRegistration : IEmbeddedResourceRouteRegistration
    {
        public IEnumerable<EmbeddedResourcePath> GetEmbeddedResourcePaths()
        {
            var path = RouteConstants.PluginModuleResourcePathPrefix + "Shared/Content/";
            yield return new EmbeddedResourcePath(this.GetType().Assembly, path);
        }
    }
}
