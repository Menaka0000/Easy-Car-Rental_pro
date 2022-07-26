import axios from "../api/api";

class CustomerService {
    postCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('customer', data)
                .then((res) => {
                    console.log("test one")
                    return resolve(res)

                })
                .catch((err) => {
                    console.log("test two")
                    console.log(err)
                    return resolve(err)

                })
        });

        return await promise;
    }

    fetchCustomer = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('customer')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    putCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('customer', data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    deleteCustomer = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('customer', {params: params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };
}
export default new CustomerService();