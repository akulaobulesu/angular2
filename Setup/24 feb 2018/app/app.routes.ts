import { StudentUpdateComponent } from './student-update.component';
import { StudentListComponent } from './student-list.component';
import { StudentFormComponent } from './student-form.component';
import { Routes,RouterModule } from "@angular/router";

const routes:Routes = [

    {path:"form",component:StudentFormComponent},
    {path:"list",component:StudentListComponent},
    {path:"update/:abc",component:StudentUpdateComponent},
    
    {path:"",redirectTo:"/list",pathMatch:"full"},
];

export const mainRoutes = RouterModule.forRoot(routes);