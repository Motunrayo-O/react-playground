import apiCilent from "./api-cilent";

interface Entity {
  id: number;
}

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const abortCtrllr = new AbortController();

    const request = apiCilent.get<T[]>(this.endpoint, {
      signal: abortCtrllr.signal,
    });

    return { request, cancel: () => abortCtrllr.abort() };
  }

  add<T>(objectToAdd: T) {
    return apiCilent.post(this.endpoint, objectToAdd);
  }

  update<T extends Entity>(objectToUpdate: T) {
    return apiCilent.patch(
      this.endpoint + "/" + objectToUpdate.id,
      objectToUpdate
    );
  }

  delete(id: number) {
    return apiCilent.delete(this.endpoint + "/" + id);
  }
}

const create = (endpoint: string) => new HttpService(endpoint);
export default create;
