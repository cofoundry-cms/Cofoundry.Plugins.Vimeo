using Cofoundry.Core;
using Cofoundry.Core.ResourceFiles;
using Cofoundry.Domain;
using Cofoundry.Web.Admin;
using System;
using System.Collections.Generic;

namespace Cofoundry.Plugins.Vimeo.Admin
{
    public class EmbeddedResourceRouteRegistration : IEmbeddedResourceRouteRegistration
    {
        private readonly AdminSettings _adminSettings;

        public EmbeddedResourceRouteRegistration(AdminSettings adminSettings)
        {
            _adminSettings = adminSettings;
        }

        public IEnumerable<EmbeddedResourcePath> GetEmbeddedResourcePaths()
        {
            if (_adminSettings.Disabled) yield break;

            var path = RouteConstants.PluginModuleResourcePathPrefix + "Shared/Content";
            var rewritePath = FilePathHelper.CombineVirtualPath(_adminSettings.DirectoryName, path);

            yield return new EmbeddedResourcePath(this.GetType().Assembly, path, rewritePath);
        }
    }
}
