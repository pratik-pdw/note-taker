import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Notes } from './model/notes';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  notes:Notes[];
  
  
  localNotes:Notes[];
  isEdit:boolean = false;
  editNoteId:number;
 

  constructor(private flashMessagesService: FlashMessagesService){

   

    if(localStorage.getItem('notes') === null){
      this.notes = [] as any;
    }
    else{
      this.notes = JSON.parse(localStorage.getItem('notes')) as any; 
    }  

  }
  

  addNote(f){

    if(f.valid){
      if(this.isEdit){
        this.localNotes = JSON.parse(localStorage.getItem('notes'));
        for(let i=0;i<this.localNotes.length;i++)
        {
          if(this.localNotes[i].id === this.editNoteId){
            this.localNotes[i].noteTitle = f.value.noteTitle;
            this.localNotes[i].noteBody = f.value.noteBody;
            break;
          }
        }
        this.isEdit = false;
        localStorage.setItem('notes',JSON.stringify(this.localNotes));
  
      }
      else{
        if(localStorage.getItem('notes') === null){
          f.value.id = Math.random();
          this.notes.unshift(f.value);
          localStorage.setItem('notes',JSON.stringify(this.notes));
        }
        else{
          this.localNotes = JSON.parse(localStorage.getItem('notes'));
          f.value.id = Math.random();
          this.localNotes.unshift(f.value);
          localStorage.setItem('notes',JSON.stringify(this.localNotes));
        } 
      }
     
    }
    else{
      this.flashMessagesService.show('Both fields are required', { cssClass: 'alert-danger', timeout: 5000 });
    }

    this.notes = JSON.parse(localStorage.getItem('notes'));
    
  }

  removeNote(id){

    if(localStorage.getItem('notes') === null){
      this.notes = [];
    }
    else{
      this.localNotes = JSON.parse(localStorage.getItem('notes'));
      for(let i=0;i<this.localNotes.length;i++)
      {
        if(id === this.localNotes[i].id){
          this.localNotes.splice(i,1);
        }
      }
      localStorage.setItem('notes',JSON.stringify(this.localNotes));
    }
      
    this.notes = JSON.parse(localStorage.getItem('notes'));
  }

  editNote(note){
    this.notes = note;
    this.isEdit = true;
    this.editNoteId = note.id;
  }
  

}
