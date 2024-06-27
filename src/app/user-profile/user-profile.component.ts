import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://example.com/avatar.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // Add more properties as needed
  };

  constructor() { }

  ngOnInit(): void {
    // Initialize component
  }
}
