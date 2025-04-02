class Controller {
    constructor() {
        // Constructor vacío
    }

    private async request(url: string, options?: RequestInit): Promise<any> {
        if (!url) {
            throw new Error("URL is required");
        }
        if (!url.startsWith("/")) {
            throw new Error("URL must start with '/'");
        }

        try {
            const API_URL = import.meta.env.VITE_API_BASE_URL;
            const response = await fetch(`${API_URL}${url}`, options);

            if (!response.ok) {
                const errorText = await response.text();
                console.error("Error del servidor:", errorText);
                throw new Error(`Error del servidor: ${response.status} ${response.statusText}`);
            }
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const data = await response.json();
                return data;
            } else {
                const text = await response.text();
                return text.length > 0 ? text : { success: true };
            }
        } catch (error) {
            console.error("Error en la operación fetch:", error);
            throw error;
        }
    }

    public create = async (url: string, data: object): Promise<any> => {
        return await this.request(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    };

    public getOne = async (url: string, id: number): Promise<any> => {
        return await this.request(`${url}/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
    };

    public getAll = async (url: string): Promise<any> => {
        return await this.request(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
    };
}

const controller = new Controller();

export default controller;