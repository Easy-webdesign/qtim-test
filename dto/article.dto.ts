// @verbatimModuleSyntax: true

// @filename: file-with-export.ts

export interface IArticlesItem {
    id: string
    image: string
    title: string
    preview: string
    description: string
    createdAt: string,
    operationName?: string
    query?: string
    variables?: object
}

export interface IPropertyPagination {
    page: number,
    count: number,
    setPageArticles: () => void
}