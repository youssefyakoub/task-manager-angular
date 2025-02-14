import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Build a Portfolio Website',
      summary: 'Create a personal portfolio using Angular and Tailwind CSS.',
      dueDate: '2025-10-05',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'React Deep Dive',
      summary:
        'Explore React hooks, state management, and best practices for building modern web apps.',
      dueDate: '2025-11-15',
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'GraphQL API with Node.js',
      summary: 'Develop a GraphQL API using Node.js and Apollo Server.',
      dueDate: '2025-09-20',
    },
    {
      id: 't5',
      userId: 'u3',
      title: 'Node.js API Development',
      summary:
        'Build RESTful APIs with Express.js and integrate with databases like MongoDB.',
      dueDate: '2025-10-10',
    },
    {
      id: 't6',
      userId: 'u3',
      title: 'Deploy Node.js App on AWS',
      summary: 'Learn how to deploy a Node.js app using AWS EC2 and RDS.',
      dueDate: '2025-12-01',
    },
    {
      id: 't7',
      userId: 'u4',
      title: 'UI/UX Design Fundamentals',
      summary:
        'Understand user experience principles and create intuitive interfaces with Figma.',
      dueDate: '2025-09-05',
    },
    {
      id: 't8',
      userId: 'u4',
      title: 'Conduct a UX Research',
      summary:
        'Perform a user research study and improve UI based on findings.',
      dueDate: '2025-10-15',
    },
    {
      id: 't9',
      userId: 'u5',
      title: 'Python for Data Science',
      summary:
        'Learn NumPy, Pandas, and Matplotlib to analyze and visualize data effectively.',
      dueDate: '2025-08-20',
    },
    {
      id: 't10',
      userId: 'u5',
      title: 'Machine Learning Basics',
      summary:
        'Understand ML algorithms and implement models using Scikit-Learn.',
      dueDate: '2025-10-30',
    },
    {
      id: 't11',
      userId: 'u6',
      title: 'DevOps Essentials',
      summary:
        'Master CI/CD pipelines, Docker, and Kubernetes for modern cloud applications.',
      dueDate: '2025-07-15',
    },
    {
      id: 't12',
      userId: 'u6',
      title: 'Automate Deployments with Ansible',
      summary:
        'Learn infrastructure automation using Ansible for cloud deployments.',
      dueDate: '2025-11-05',
    },
    {
      id: 't13',
      userId: 'u7',
      title: 'Cybersecurity Basics',
      summary:
        'Understand security principles, ethical hacking, and how to protect applications.',
      dueDate: '2025-06-10',
    },
    {
      id: 't14',
      userId: 'u7',
      title: 'Secure Web Applications',
      summary:
        'Learn OWASP security practices and protect web applications from attacks.',
      dueDate: '2025-08-25',
    },
    {
      id: 't15',
      userId: 'u8',
      title: 'Mobile App Development',
      summary: 'Create cross-platform mobile apps using Flutter and Firebase.',
      dueDate: '2025-05-30',
    },
    {
      id: 't16',
      userId: 'u8',
      title: 'Optimize Mobile Performance',
      summary:
        'Improve mobile app performance by optimizing images, animations, and caching.',
      dueDate: '2025-09-18',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  gstUserTask(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
