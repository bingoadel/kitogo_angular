// Controller-Namen zentral ablegen
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

const BASE_URL = 'http://87.106.41.173:8080';

export class ApiUrlResolver {
  private baseUrl: string;
  private config: Record<string, string>;

  constructor(baseUrl: string = BASE_URL, config: Record<string, string> = apiConfig) {
    this.baseUrl = baseUrl;
    this.config = config;
  }

  public getUrl(actionKey: string): string {
    const actionPath = this.config[actionKey];
    if (!actionPath) {
      throw new Error(`Action-Key '${actionKey}' nicht gefunden`);
    }
    return `${this.baseUrl}${actionPath}`;
  }
}