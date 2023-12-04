import type { IArticlesItem } from "~/dto/article.dto";

export const useMain = defineStore('main', {
    state: () => {
        return {
            articles: [] as IArticlesItem[],
            article: {} as IArticlesItem,
            pageArticles: [] as IArticlesItem[],
            pagination: [] as number[],
            page: 1,
            prev: false,
            next: false
        }
    },
    getters:{
        getArticles(state){
            return state.articles;
        },
        getArticle(state){
            return state.article;
        },
        getPageArticles(state){
            return state.pageArticles;
        },
        getPagination(state){
            return state.pagination;
        },
        getPage(state){
            return state.page;
        },
        getPrev(state){
            return state.prev;
        },
        getNext(state){
            return state.next;
        },

        getCount(state){
            return Math.ceil(state.articles.length / 8);
        }
    },
    actions: {
        async fetchArticles() {
            const config = useRuntimeConfig();
            const { data } = await useFetch<IArticlesItem[]>(
                config.public.baseURL + '/',
                { method: 'get'}
            );


            this.setArticles(data.value as IArticlesItem[]);
        },

        async fetchArticleById(id: string){
            const config = useRuntimeConfig();
            const { data } = await useFetch<IArticlesItem>(
                `${config.public.baseURL}/${id}`,
                { method: 'get'}
            );
            
            this.setArticle(data.value as IArticlesItem)
        },
        
        setArticles(articles: IArticlesItem[]){
            this.articles = articles;
        },

        setArticle(article: IArticlesItem){
            this.article = article;
        },

        setPageArticles(num: number){
            const items = [...this.getArticles].splice((num - 1) * 8, 8);
            this.pageArticles = items
            this.page = num;
        },

        setPageProperties(btn: number) {
            console.log(this.getCount);
            
            if(this.page === btn) return;
            if(btn >= 4){
    
                // @ts-ignore 
                const iterationLength: number = btn + 2 >= this.getCount ? 
                this.getCount : btn + 2;
                // @ts-ignore 
                const idx: number = btn === this.getCount ? 
                                    btn - 4 : 
                                    btn === this.getCount - 1 ?
                                    btn - 3 :
                                    btn - 2 <= 1 ? btn : btn - 2
    
                
    
                this.pagination = [];
                
                for (let i = idx; i <= iterationLength; i++) this.pagination.push(i);
    
                if(btn + 3 <= this.getCount) this.next = true;
                else this.next = false
    
                this.prev = true;
                
            } else {
                this.pagination = [];
                for (let i = 1; i <= 5; i++) this.pagination.push(i);
    
                this.next = true;
                this.prev = false;
            }
    
            this.setPageArticles(btn);
        },

        setPaginationList(){
            this.setPageArticles(1);
            for (let i = 1; i <= 5; i++) this.pagination.push(i);
            if(this.pageArticles.length > 5) this.next = true;
        },

        clearPagination(){
            this.pagination = [];
        },

        

    },
})
