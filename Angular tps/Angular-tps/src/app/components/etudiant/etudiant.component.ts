import { Component } from '@angular/core';
import {Student} from './Typeetudiant' ;
import { FormsModule } from '@angular/forms';
import {UpperCasePipe} from "@angular/common"
@Component({
  selector: 'app-etudiant',
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent {
etudiant : Student={
id:1,
name:'omar abdelkader'
};}
