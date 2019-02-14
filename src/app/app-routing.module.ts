import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { TimelinesComponent } from './timelines/timelines.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryDetailsComponent } from './dictionary-details/dictionary-details.component';
import { AuthGuard } from './auth.guard';
import { LoginStep1Component } from './login-step1/login-step1.component';
import { LoginStep2Component } from './login-step2/login-step2.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
  path:'timelines',
  component: TimelinesComponent
},
{
  path: 'dictionary',
  component: DictionaryPageComponent,
  children: [
    {
      path: ':key',
      component: DictionaryDetailsComponent,
      canActivate: [AuthGuard]
    }
  ]
},
{
  path: 'login-step-1',
  component: LoginStep1Component
},
{
  path: 'login-step-2',
  component: LoginStep2Component
},
{
  path: 'upload',
  component: UploadComponent
},
{
  path: 'youtube',
  component: YoutubePlaylistComponent,
  children: [{
      path: ':id',
      component: YoutubePlayerComponent
}]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
