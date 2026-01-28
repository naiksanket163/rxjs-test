import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/component/home/home.component";
import { AboutComponent } from "./shared/component/about/about.component";
import { TodosComponent } from "./shared/component/todos/todos.component";
import { TodoscmpltComponent } from "./shared/component/todoscmplt/todoscmplt.component";
import { TodosnocmpltComponent } from "./shared/component/todosnocmplt/todosnocmplt.component";


const routes : Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'home',
        component : HomeComponent
    },
    {
        path : 'about',
        component : AboutComponent
    },
    {
        path : 'todos',
        component : TodosComponent
    },
    {
        
        path : 'todoscmplt',
        component : TodoscmpltComponent
    },
    {
        path :'todosnocmt',
        component : TodosnocmpltComponent
    },

];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule {}