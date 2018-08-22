import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/interfaces/person.interface';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  people: Person[] = [];
  constructor(private userService: PersonService) {}

  ngOnInit() {
    this.userService.getPeople()
      .subscribe((people: Person[]) => this.people = people);
  }

  removePerson(person: Person): void {
    this.people = this.people.filter((p: Person) => p.id !== person.id);
  }
}
