import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardListComponent } from './card-list/card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, CardListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ComponentLifecycleExample';
  todosMain = [
    { name: 'Task 1', date: '2023-01-01', type: 'Work' },
    { name: 'Task 2', date: '2023-02-15', type: 'Personal' },
    { name: 'Task 3', date: '2023-03-30', type: 'Study' },
    { name: 'Task 4', date: '2023-04-10', type: 'Work' },
    { name: 'Task 5', date: '2023-05-20', type: 'Personal' },
    { name: 'Task 6', date: '2023-06-05', type: 'Study' },
  ];
}
