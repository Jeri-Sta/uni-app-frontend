import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {CoreModule} from "../core/core.module";
import {PrimeTemplate} from "primeng/api";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {SidebarModule} from "primeng/sidebar";
import {ToolbarModule} from "primeng/toolbar";
import {TooltipModule} from "primeng/tooltip";
import {PanelModule} from "primeng/panel";
import {ToastModule} from "primeng/toast";
import {TableModule} from "primeng/table";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        PrimeTemplate,
        ButtonModule,
        InputTextModule,
        PasswordModule,
        SidebarModule,
        ToolbarModule,
        NgOptimizedImage,
        TooltipModule,
        PanelModule,
        ToastModule,
        TableModule,
    ],
    declarations: [
        LoginComponent,
    ],
    exports: [
    ],
    providers: [
    ]
})
export class FeatureModule {}