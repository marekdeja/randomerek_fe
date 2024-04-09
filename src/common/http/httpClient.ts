/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
   AxiosInstance,
   AxiosPromise,
   AxiosResponse,
   InternalAxiosRequestConfig,
   Method,
} from 'axios'

export interface Request {
   headers?: Record<string, string>
   data?: any
   params?: any
}

export class HttpClient {
   private httpClient: AxiosInstance
   private handleRequestUse(config: InternalAxiosRequestConfig) {
      // handle request interceptor logic here
      return config
   }

   private handleResponseUse(config: AxiosResponse) {
      // handle response interceptor logic here
      return config
   }

   private async handleRequest(
      url: string,
      method: Method,
      config: Request = {},
   ): Promise<AxiosResponse<any>> {
      const { headers, data, params } = config
      const response = await this.httpClient.request({
         url,
         method,
         data,
         params,
         headers,
      })
      return response
   }

   public get<T>(url: string, config: Request = {}): AxiosPromise<T> {
      return this.handleRequest(url, 'get', config)
   }

   public post<T>(url: string, config: Request = {}): AxiosPromise<T> {
      return this.handleRequest(url, 'post', config)
   }

   public put<T>(url: string, config: Request = {}): AxiosPromise<T> {
      return this.handleRequest(url, 'put', config)
   }

   public delete<T>(url: string, config: Request = {}): AxiosPromise<T> {
      return this.handleRequest(url, 'delete', config)
   }

   public patch<T>(url: string, config: Request = {}): AxiosPromise<T> {
      return this.handleRequest(url, 'patch', config)
   }

   constructor() {
      this.httpClient = axios.create({
         // baseURL: 'https://jsonplaceholder.typicode.com',
         baseURL: 'http://localhost:3000',
         timeout: 60000,
      })

      //Functions for interceptors to do sth before request and response
      //   this.httpClient.interceptors.request.use(this.handleRequestUse)
      //   this.httpClient.interceptors.response.use(this.handleResponseUse)
   }
}

export default new HttpClient()
