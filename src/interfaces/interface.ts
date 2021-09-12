export interface Project {
    projectId: string;
    projectName: string;
    totalTime: string;
}

export interface Client {
    clientId: string;
    clientName: string;
    projects: Project[];
}