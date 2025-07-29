import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';

import type { ApiClient, ApiError, ApiResponse } from '../types/api.types.ts';

const BASE_URL = 'https://dummyjson.com/';

class Api implements ApiClient {
  private client: AxiosInstance;

  constructor(baseURL = '') {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  private handleResponse<T>(response: AxiosResponse<T>): ApiResponse<T> {
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  }

  private handleError(error: unknown): never {
    if (axios.isAxiosError(error)) {
      const apiError: ApiError = {
        message:
          error.response?.data?.message ?? error.message ?? 'Request failed',
        status: error.response?.status,
        code: error.code,
        data: error.response?.data,
      };
      throw apiError;
    }

    const apiError: ApiError = {
      message:
        error instanceof Error ? error.message : 'An unexpected error occurred',
    };
    throw apiError;
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.get<T>(url, config);
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  async post<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.post<T>(url, data, config);
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  async put<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.put<T>(url, data, config);
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  async patch<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.patch<T>(url, data, config);
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.delete<T>(url, config);
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }
}

export const api = new Api(BASE_URL);
