import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  filteredProjects: any[] = [];
  filterTech: string = 'All';
  selectedVideo: string | null = null; // Track the selected video

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.projects = this.dataService.getProjects();
    this.filteredProjects = this.projects;
  }

  filterProjects(tech: string) {
    this.filterTech = tech;
    if (tech === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.tech.includes(tech));
    }
  }

  playVideo(videoUrl: string) {
    this.selectedVideo = videoUrl; // Set the video to play
  }

  closeVideo() {
    this.selectedVideo = null; // Close the modal
  }
}