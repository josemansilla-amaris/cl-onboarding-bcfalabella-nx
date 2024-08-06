export class HealthCheckService {
  public async check(loggerBuilder: any): Promise<string> {
    loggerBuilder(
      'info', 
      'src/application/services', 
      'calling HealthCheckService -> function check')
    return 'Service is up and running';
  }
}