import {Photo} from "@/models/Photo";
import {makeAutoObservable} from "mobx";
import PhotoService from "@/services/PhotoService";

class PhotoStore {
    photos: Photo[] = [];
    page = 1;
    loading = false;

    constructor() {
        makeAutoObservable(this)
    }

    loadPhotos = async () => {
        this.loading = true;
        await PhotoService.getPhotos(this.page).then(response => {
            this.photos = [...this.photos, ...response.data]
            this.page++;
        }).finally(() => {
            this.loading = false;
        })

    }
}

const photoStore = new PhotoStore()
export default photoStore;