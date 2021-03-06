import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppMainModule } from '../app/app-main/app-main.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AllEventSetsComponent } from './CreateEvent/all-event-sets/all-event-sets.component';
import { AllCustomersComponent } from './CreateEvent/all-customers/all-customers.component';
import { CreateEventDetailsComponent } from './CreateEvent/create-event-details/create-event-details.component';
import { AuthGuard } from './guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DndDirective } from './directives/dnd.directive';
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // BreadcrumbComponent,
    AllEventSetsComponent,
    AllCustomersComponent,
    CreateEventDetailsComponent,
    UserProfileComponent,
    DndDirective,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AppMainModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgHttpLoaderModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
