import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS_DATA } from '@data/constants/user.const';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent{
  public users: ICardUser[] = USERS_DATA;
  public id: number;
  public currentUser: ICardUser;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    // Se antepone el mas en el ID para convertir automaticamente en un entero
    this.currentUser = this.users.find(user=> user.id === +this.id)
    console.log(this.currentUser)
   }

}
