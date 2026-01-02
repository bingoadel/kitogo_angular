import { Injectable } from '@angular/core';


const CONTROLLERS = {
  C1: 'UserManagement',
  C2: 'KiTools'
} as const;

// Action-Pfade zentral ablegen
const apiConfig: Record<string, string> = {
  registration: `/${CONTROLLERS.C1}/RegisterUser`,
  activateaccount: `/${CONTROLLERS.C1}/ActivateUserAccount`,
  loginuser: `/${CONTROLLERS.C1}/LoginUser`,
  promtanswer: `/${CONTROLLERS.C2}/PromtAnswerTool`,
};

//env production
const BASE_URL = 'http://87.106.41.173:8080';
//env local
//const BASE_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class ApiUrlResolver {
  private baseUrl: string;
  private config: Record<string, string>;

  constructor() {
    this.baseUrl = BASE_URL;
    this.config = apiConfig;
  }
  public getUrl(actionKey: string): string {
    const actionPath = this.config[actionKey];
    if (!actionPath) {
      throw new Error(`Action-Key '${actionKey}' nicht gefunden`);
    }
    return `${this.baseUrl}${actionPath}`;
  }
}