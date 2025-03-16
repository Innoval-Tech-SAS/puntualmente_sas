class Controller {
    constructor() {
        console.log('');
    }


    public getOne = (id: number) => {
        console.log('get');
    }

    public getAll = () => {
        console.log('getAll');
    }

    public create = (data: any) => {
        console.log(`create: ${data}`);
    }

    public update = (id: number, data: any) => {
        console.log(`update: ${id} ${data}`);
    }

    public delete = (id: number) => {
        console.log(`delete: ${id}`);
    }

    private fecthData = (url: string, method: string, options?: any) => {
        fetch(url, {
            method: method,
            ...options
        }).then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        }).then(data => {
            console.log(data);
            return data.data;
        }).catch(error => {
            console.log(error);
        });
    }


}

const contoller = new Controller();

export default contoller;