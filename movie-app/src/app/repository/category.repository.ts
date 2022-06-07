import { Category } from "../models/category";

export class CategoryRepository {
    private categories: Category[];

    constructor() {
        this.categories = [
            { id: 1, title: "Comedy" },
            { id: 2, title: "Sci-Fi" },
            { id: 3, title: "Drama" },
            { id: 4, title: "Romantic" }
        ]
    }

    getCategories() : Category[]{
        return this.categories;
    }
}