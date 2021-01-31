import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
    imports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatIconModule, MatFormFieldModule, MatInputModule, MatNativeDateModule],
    exports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatIconModule, MatFormFieldModule, MatInputModule, MatNativeDateModule]
})
export class MaterialModule { }