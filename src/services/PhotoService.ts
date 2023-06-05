import {AxiosResponse} from "axios";
import {Photo} from "@/models/Photo";
import api from "@/http";

export default class PhotoService {
    static async getPhotos(page: number): Promise<AxiosResponse<Photo[]>> {
        return api.get<Photo[]>(`/photos?_page=${page}&_limit=10`);
    }
}