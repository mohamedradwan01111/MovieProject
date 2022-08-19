import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetalisComponent } from './moviedetalis/moviedetalis.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {path:'' ,redirectTo:'home' ,pathMatch:'full'},
  {path:'home' , canActivate:[AuthGuard], component:HomeComponent},
  {path:'about' , canActivate:[AuthGuard],component:AboutComponent},
  {path:'contacts' , canActivate:[AuthGuard],component:ContactsComponent},
  {path:'moviedetalis/:id' , canActivate:[AuthGuard],component:MoviedetalisComponent},
  {path:'setting',
   loadChildren:()=> import('./setting/setting.module').then((m)=>m.SettingModule)},
  {path:'login' ,component:LoginComponent},
  {path:'register' ,component:RegisterComponent},
  {path:'**' ,component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
