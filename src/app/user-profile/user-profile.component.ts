import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'This is the bio of John Doe.',
    avatar: 'assets/littleboy.jpg',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe'
  };

  isEditing = false;
  editProfileForm: FormGroup;
  updatedDetails:any [] = []; 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editProfileForm = this.fb.group({
      name: [this.user.name],
      email: [this.user.email],
      bio: [this.user.bio],
      avatar: [this.user.avatar]
    });
  }
 

  editProfile(): void {
    this.isEditing = true;
  }

  cancelEdit(): void {
    this.isEditing = false;
  }

  saveProfile(): void {
    if (this.editProfileForm.valid) {
     // this.user = { ...this.user, ...this.editProfileForm.value };
   // this.updatedDetails.push(this.editProfileForm.value)
    
      console.log(this.updatedDetails)
      this.isEditing = false;
    }
  }
}
