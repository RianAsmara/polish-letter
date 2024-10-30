import { getEnv } from '@/utils/get-env';
import { consoleLog } from '@/utils/logger';


interface HTTPParams<T> {
  config?: RequestInit;
  body: T;
}

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export const APPLICATION_JSON = 'application/json';
export const MULTIPART_FORM_DATA = 'multipart/form-data';
export const APPLICATION_PDF = 'application/pdf';
export const IMAGE_JPEG = 'image/jpeg';
export const VIDEO_MP4 = 'video/mp4';

interface LoggerParams<T> extends Partial<HTTPParams<T>> {
  response: Response;
  data?: T;
}

async function logger<T>({ config, response, data }: LoggerParams<T>) {
  const { ENV } = getEnv();
  const isDev = ENV?.toLowerCase() === 'development';

  if (isDev) {
    consoleLog(
      '\n\n',
      {
        url: response.url,
        config,
        status: response.status,
        message: response.statusText,
        data,
      },
      '\n\n'
    );
  }
}

async function http<T>(path: string, { config }: Partial<HTTPParams<T>>): Promise<T> {
  const { API_URL } = getEnv();

  // const token = session?.accessToken;


  const URL = `${API_URL}${path}`;

  const options = {
    ...config,
    headers: {
      ...config?.headers,
      Authorization: `Bearer adasdasd`,
    },
  } as RequestInit;

  const request = new Request(URL, options);

  const response = await fetch(request);

  const isJson = response.headers.get('Content-Type')?.includes(APPLICATION_JSON);
  const apiResponse = isJson ? await response.json() : await response.blob();

  logger({ config: options, response, data: apiResponse });

  // if (apiResponse.status === 401) {
  //   navigate('/login');
  // }

  if (apiResponse.status !== 200 && isJson) {
    throw apiResponse;
  }

  return apiResponse;
}

const API = {
  async get<T>(path: string, { config }: Partial<HTTPParams<T>> = {} as never): Promise<T> {
    const init = { method: HttpMethod.GET, ...config };

    return http<T>(path, { config: init });
  },

  async getFile<T>(path: string, { config }: Partial<HTTPParams<T>> = {} as never): Promise<T> {
    const init: RequestInit = {
      method: HttpMethod.GET,
      ...config,
      headers: { ...config?.headers, 'Content-Type': IMAGE_JPEG },
    };

    return http<T>(path, { config: init });
  },

  async delete<T>(path: string, { config }: Partial<HTTPParams<T>> = {} as never): Promise<T> {
    const init = { method: HttpMethod.DELETE, ...config };

    return http<T>(path, { config: init });
  },

  /**
   * A description of the entire function.
   *
   * @param {string} path - description of parameter
   * @param {HTTPParams<Body>} [body, config] - description of parameter
   * @return {Promise<Response>} description of return value
   *
   * @usage API.post<Body, Response>('/endpoint-here', { body, config })
   */
  async post<Body, Response>(
    path: string,
    { body, config }: HTTPParams<Body> = {} as never
  ): Promise<Response> {
    const init = {
      method: HttpMethod.POST,
      body: JSON.stringify(body),
      ...config,
      headers: {
        ...config?.headers,
        'Content-Type': APPLICATION_JSON,
      },
    } as RequestInit;

    return http<Response>(path, { config: init });
  },

  async put<Body, Response>(
    path: string,
    { body, config }: HTTPParams<Body> = {} as never
  ): Promise<Response> {
    const init = {
      method: HttpMethod.PUT,
      body: JSON.stringify(body),
      ...config,
      headers: {
        ...config?.headers,
        'Content-Type': APPLICATION_JSON,
      },
    } as RequestInit;

    return http<Response>(path, { config: init });
  },

  async patch<Body, Response>(
    path: string,
    { body, config }: HTTPParams<Body> = {} as never
  ): Promise<Response> {
    const init = {
      method: HttpMethod.PATCH,
      body: JSON.stringify(body),
      ...config,
      headers: {
        ...config?.headers,
        'Content-Type': APPLICATION_JSON,
      },
    } as RequestInit;

    return http<Response>(path, { config: init });
  },
};

export default API;