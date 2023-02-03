import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BadgeComponent } from './components/badge/badge.component';
import {MatBadgeModule} from '@angular/material/badge';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { ButtonComponent } from './components/button/button.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './components/card/card.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import { ChipsComponent } from './components/chips/chips.component';
import {MatCommonModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { DividerComponent } from './components/divider/divider.component';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { FormFieldComponent } from './components/form-field/form-field.component';



@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    BadgeComponent,
    BottomSheetComponent,
    ButtonComponent,
    ButtonToggleComponent,
    CardComponent,
    CheckBoxComponent,
    ChipsComponent,
    DatePickerComponent,
    DialogComponent,
    DividerComponent,
    ExpansionPanelComponent,
    FormFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatListModule,
    MatExpansionModule,
    MatInputModule
   
  ],
  providers: [],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
