import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'Angular (2-18)', level: 'Expert' },
    { name: 'React.js', level: 'Advanced' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'Express.js', level: 'Advanced' },
    { name: 'HTML5', level: 'Expert' },
    { name: 'Tailwind CSS', level: 'Intermediate' },
    { name: 'Bootstrap', level: 'Advanced' },
    { name: 'Angular Material', level: 'Advanced' },
    { name: 'ag-grid', level: 'Intermediate' },
    { name: 'NGRX', level: 'Intermediate' },
    { name: 'RESTful APIs', level: 'Expert' },
    { name: 'GraphQL', level: 'Intermediate' }
  ];
}