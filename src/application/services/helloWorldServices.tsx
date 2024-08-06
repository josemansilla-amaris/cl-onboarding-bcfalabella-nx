export class HelloWorldService {
  public async helloworld(loggerBuilder: any): Promise<string> {
    loggerBuilder(
      'info', 
      'src/application/services', 
      'calling HelloWorldService -> function helloworld')
    return 'Hello World';
  }
}