
// Создаем кастомный useFetch для добавления своих параметров, где:
// - req: url в виде строки
// - opts: параметры запроса  
const useFetchHandler: typeof useFetch = (req, opts) => {
    // Достаем baseURL из runtimeConfig 
    const config = useRuntimeConfig();
    // Возвращаем функцию useFetch в которую передаем req, baseUrl достаем из config.baseURL и opts
    return useFetch(req, {
        baseURL: config.public.baseURL, 
        ...opts,
    })
}

// Добавляем функцию для обработки ответа
export const useMyFetch = async (req: string = 'get::/', body: any = null, opts?: any) => {
    // Парсим наш url для разбивки на метод и endpoint
    const [ method, url ] = req.split('::')

    // Создаем объект, в который мы добавляем opts, body и method 
    const newOpts = {
        ...opts, 
        body,
        method,
    }
    
    // Делаем запрос на сервер
    const data : any = await useFetchHandler(url, newOpts);
    
    // Возвращаем полученные нами данные
    // return resp.data._rawValue;
    return data.value
}