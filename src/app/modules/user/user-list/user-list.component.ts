import { Component, OnInit } from '@angular/core';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: ICardUser[] = [
    {
      id:1,
      name: 'Ivan Larios',
      age: 27,
      description: 'Desarrollador fullstack',
      avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg',
      work: 'Project manager',
    },
    {
      id:2,
      name: 'Martin Larios',
      age: 19,
      description: 'Diseñador',
      avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg'
    },
    {
      id:3,
      name: 'Luis Larios',
      age: 27,
      description: 'Desarrollador back',
      avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg'
    },
    {
      id:4,
      name: 'Hector Larios',
      age: 20,
      description: 'Desarrollador front',
      avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg'
    },
    {
      id:5,
      name: 'Martin Larios',
      age: 19,
      description: 'Diseñador',
      avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg'
    },
    {
      id:6,
      name: 'Luis Larios',
      age: 27,
      description: 'Desarrollador back',
      avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg'
    },
    {
      id:7,
      name: 'Hector Larios',
      age: 20,
      description: 'Desarrollador front',
      avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
