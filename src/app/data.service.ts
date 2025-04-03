import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getProjects() {
    return [
      {
        title: 'Fintech Dashboard',
        description: 'As a freelance Angular developer, I crafted a real-time financial dashboard for a fintech startup. Leveraging Angular 16 and Node.js, I integrated RESTful APIs to deliver interactive data visualizations, cutting client decision-making time by 30%. My responsive design and secure authentication boosted user adoption by 25%.',
        tech: 'Angular 16, Node.js, Bootstrap, REST APIs',
        video: 'assets/vidoes/fintech-dashboard.mp4',
        image: 'assets/images/fintech-dashboard.JPG'
      },
      {
        title: 'Travel Booking Platform',
        description: 'Secured a freelance contract to build a travel booking app for a mid-sized agency. Using Angular 14 and Express.js, I integrated GraphQL and third-party APIs for live flight and hotel data, achieving a 40% faster booking process. My Tailwind CSS implementation ensured a seamless, mobile-first UI, increasing client bookings by 20%.',
        tech: 'Angular 14, Express.js, Tailwind CSS, GraphQL',
        video: 'assets/vidoes/fintech-dashboard.mp4',
        image: 'assets/images/fintech-dashboard.JPG'
      },
      {
        title: 'Learning Management System (LMS)',
        description: 'Freelanced for an educational institution to develop a scalable LMS with React.js and Node.js. I implemented course management and progress tracking with MongoDB and ag-grid, supporting 500+ concurrent users. My microservices architecture reduced server costs by 15%, earning a long-term maintenance contract.',
        tech: 'React.js, Node.js, MongoDB, ag-grid',
        video: 'assets/vidoes/fintech-dashboard.mp4',
        image: 'assets/images/fintech-dashboard.JPG'
      },
      {
        title: 'E-Commerce Frontend Revamp',
        description: 'Hired as a freelance Angular expert to revamp an e-commerce site’s frontend using Angular 11 and NGRX. I optimized state management and UI performance, reducing page load times by 50%. My work with Angular Material delivered a modern, accessible interface, driving a 35% increase in customer retention for the client.',
        tech: 'Angular 11, NGRX, Angular Material, REST APIs',
        video: 'assets/vidoes/fintech-dashboard.mp4',
        image: 'assets/images/fintech-dashboard.JPG'
      },
      {
        title: 'Healthcare Appointment System',
        description: 'Took on a freelance project to build a healthcare appointment system with React.js and Express.js. Integrated a custom REST API for scheduling and notifications, cutting appointment no-shows by 20%. My Bootstrap-powered UI ensured cross-device compatibility, earning praise for usability from a clinic network.',
        tech: 'React.js, Express.js, Bootstrap, REST APIs',
        video: 'assets/vidoes/fintech-dashboard.mp4',
        image: 'assets/images/fintech-dashboard.JPG'
      }
    ];
  }
}