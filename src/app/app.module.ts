import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AngtLibModule } from "angt-lib";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AngtLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
