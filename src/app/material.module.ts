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
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from "@angular/material/sort";
@NgModule({
    imports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatDatepickerModule, MatIconModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatTabsModule, MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule, MatListModule, MatSortModule, MatPaginatorModule],
    exports: [MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatDatepickerModule, MatIconModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatTabsModule, MatSelectModule, MatSidenavModule, MatTableModule, MatToolbarModule, MatListModule, MatSortModule, MatPaginatorModule]
})
export class MaterialModule { }