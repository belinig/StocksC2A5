import { RequestMethod } from '@angular/http';

export class DataServiceOptions {
    public method: RequestMethod|null = null;
    public url: string|null = null;
    public headers: any = {};
    public params = {};
    public data = {};
}
