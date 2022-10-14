import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewComponent} from "./pages/view/view.component";
import {CreateComponent} from "./pages/create/create.component";
import {UpdateComponent} from "./pages/update/update.component";

const routes: Routes = [
  {
    path: "",
    component: ViewComponent
  },
  {
    path: "create",
    component: CreateComponent
  },
  {
    path:"update/:id",
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
