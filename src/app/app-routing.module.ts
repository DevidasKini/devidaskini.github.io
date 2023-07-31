import { ResumeComponent } from './resume/resume.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const guards = []; //canactivate guards here

//lazy loading
const routes: Routes = [
  {
    path: 'resume',
    component: ResumeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./resume/home/home.module').then((mod) => mod.HomeModule),
      },
      {
        path: 'skills',
        loadChildren: ()=>import('./resume/skills/skills.module').then(mod=>mod.SkillsModule)
      },
      {
        path: 'education',
        loadChildren: ()=>import('./resume/education/education.module').then(mod=>mod.EducationModule)
      },
      // {
      //   path: 'projects',
      //   loadChildren: ()=>import('./resume/projects/projects.module').then(mod=>mod.ProjectsModule)
      // }
    ],
  },
  {
    path: '',
    redirectTo: '/resume/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
