import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from "@angular/material/core";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatDatepickerModule, MatIconModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatTabsModule, MatSelectModule, MatSidenavModule, MatToolbarModule, MatListModule],
    exports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatDatepickerModule, MatIconModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatTabsModule, MatSelectModule, MatSidenavModule, MatToolbarModule, MatListModule]
})
export class MaterialModule { }