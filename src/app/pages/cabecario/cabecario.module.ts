import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { cabecario } from './cabecario.component';

@NgModule({
    imports: [RouterModule, CommonModule],
    exports: [cabecario],
    declarations: [cabecario],
})
export class Cabecariomodule { }
