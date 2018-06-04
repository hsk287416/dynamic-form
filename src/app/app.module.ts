import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { RandomGenerateService } from './services/random-generate.service';
import { NewsComponent } from './components/news/news.component';
import { TitleComponent } from './components/title/title.component';


@NgModule({
    declarations: [
        AppComponent,
        NewsComponent,
        TitleComponent
    ],
    imports: [
        BrowserModule,
        DynamicFormModule,
        HttpModule
    ],
    providers: [
        RandomGenerateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
