import { Routes } from '@angular/router';
import { PublicTemplateComponent } from './public/templates/template/template.component';
import { HomeComponent } from './public/pages/home/home.component';
import { Error404Component } from './public/error/error-404/error-404.component';
import { PublicComponent } from './public/index/index.component';
import { IntroductionComponent } from './public/index/introduction/introduction.component';
import { DialogComponent } from './public/index/dialog/dialog.component';


export const routes: Routes = [
  {
    path: 'public',
    component: PublicTemplateComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'welcome', component: PublicComponent,
        children: [
          { path: 'dialog', component: DialogComponent },
          { path: 'intro', component: IntroductionComponent },


          // Default route for welcome page
          { path: '', redirectTo: '/public/welcome/dialog', pathMatch: 'full', },
        ]
       },




    ],
  },

  { 
    path: 'welcome', 
    component: PublicComponent,
  },

  { 
    path: 'intro', 
    component: IntroductionComponent 
  },

  { path: 'error-404', 
    component: Error404Component 
  },

  { path: '', redirectTo: '/public/welcome', pathMatch: 'full', },
  { path: '**', redirectTo: 'error-404', pathMatch: 'full' },

];
