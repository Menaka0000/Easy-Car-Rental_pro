import axios from "../api/api";

class UploadFilesService {
    async upload(file) {
        let formData = new FormData();

        formData.append("myFile", file, file.name);

        const promise = new Promise((resolve, reject) => {
            console.log('here')
            axios.post("upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },

            })
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    console.log('error: ' + er);
                    return resolve(er)
                })
        })
        return await promise
    }

    async getAllImages() {
        const promise = new Promise((resolve, reject) => {
            console.log("getting start")
            axios.get('upload')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    console.log(err);
                    return resolve(err)
                })
        })
        return await promise
    }
}

export default new UploadFilesService();