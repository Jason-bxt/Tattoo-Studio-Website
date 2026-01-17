import { HttpClient } from '@angular/common/http';
import { Component, inject, NgModule } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls:[ './contact.component.scss', './contact-responsive.component.scss' ]
})
export class ContactComponent {




  http = inject(HttpClient);
 
  contactData = {
    name: "",
    email: "",
    message: "",
  }

  termsAccepted: boolean = false;
  submitted: boolean = false;

  post = {
    endPoint: 'https://jason-peters.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.submitted = true;
    if (ngForm.valid && this.termsAccepted) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
    
          },
          complete: () => console.info(''),
        });
    } else {
   
    }
  }








  files: File[] = [];

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      this.handleFiles(event.dataTransfer.files);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.handleFiles(input.files);
    }
  }

  handleFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      if (this.files.length < 10) {
        this.files.push(files[i]);
      }
    }
  }

}
