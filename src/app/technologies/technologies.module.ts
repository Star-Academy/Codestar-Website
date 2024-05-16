import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AngularComponent} from './angular/angular.component';
import {AspDotnetCoreComponent} from './asp-dotnet-core/asp-dotnet-core.component';
import {CSharpComponent} from './c-sharp/c-sharp.component';
import {CssComponent} from './css/css.component';
import {ElasticsearchComponent} from './elasticsearch/elasticsearch.component';
import {EntityFrameworkCoreComponent} from './entity-framework-core/entity-framework-core.component';
import {HtmlComponent} from './html/html.component';
import {JavascriptComponent} from './javascript/javascript.component';
import {KibanaComponent} from './kibana/kibana.component';
import {NpmComponent} from './npm/npm.component';
import {NugetComponent} from './nuget/nuget.component';
import {PostgresqlComponent} from './postgresql/postgresql.component';
import {SassComponent} from './sass/sass.component';
import {UiUxComponent} from './ui-ux/ui-ux.component';
import {XunitComponent} from './xunit/xunit.component';
import {LinuxComponent} from './linux/linux.component';
import {AnsibleComponent} from './ansible/ansible.component';
import {DockerComponent} from './docker/docker.component';
import {GitHubActionsComponent} from './gh-actions/gh-actions.component';
import {GoComponent} from './go/go.component';
import {NetworkComponent} from './network/network.component';
import {NginxComponent} from './nginx/nginx.component';
import {OtelComponent} from './otel/otel.component';

@NgModule({
    declarations: [
        AngularComponent,
        AspDotnetCoreComponent,
        CSharpComponent,
        CssComponent,
        ElasticsearchComponent,
        EntityFrameworkCoreComponent,
        HtmlComponent,
        JavascriptComponent,
        KibanaComponent,
        NpmComponent,
        NugetComponent,
        PostgresqlComponent,
        SassComponent,
        UiUxComponent,
        XunitComponent,
        LinuxComponent,
        AnsibleComponent,
        DockerComponent,
        GitHubActionsComponent,
        GoComponent,
        NetworkComponent,
        NginxComponent,
        OtelComponent,
    ],
    imports: [CommonModule],
    exports: [
        AngularComponent,
        AspDotnetCoreComponent,
        CSharpComponent,
        CssComponent,
        ElasticsearchComponent,
        EntityFrameworkCoreComponent,
        HtmlComponent,
        JavascriptComponent,
        KibanaComponent,
        NpmComponent,
        NugetComponent,
        PostgresqlComponent,
        SassComponent,
        UiUxComponent,
        XunitComponent,
        LinuxComponent,
        AnsibleComponent,
        DockerComponent,
        GitHubActionsComponent,
        GoComponent,
        NetworkComponent,
        NginxComponent,
        OtelComponent,
    ],
})
export class TechnologiesModule {}
