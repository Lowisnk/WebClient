class Bookmarks_API {
    // static API_URL() { return "http://localhost:5000/api/contacts" };
    static API_URL() { return "https://rune-vivacious-botany.glitch.me/api/bookmarks" };
    static async Get(id = null) {
        return new Promise(resolve => {
            $.ajax({
                url: this.API_URL() + (id != null ? "/" + id : ""),
                success: bookmarks => { resolve(bookmarks); },
                error: (xhr) => { console.log(xhr); resolve(null); }
            });
        });
    }
    static async Save(bookmarks, create = true) {
        return new Promise(resolve => {
            $.ajax({
                url: this.API_URL(),
                type: create ? "POST" : "PUT",
                contentType: 'application/json',
                data: JSON.stringify(bookmarks),
                success: (/*data*/) => { resolve(true); },
                error: (/*xhr*/) => { resolve(false /*xhr.status*/); }
            });
        });
    }
    static async Delete(id) {
        return new Promise(resolve => {
            $.ajax({
                url: this.API_URL() + "/" + id,
                type: "DELETE",
                success: () => { resolve(true); },
                error: (/*xhr*/) => { resolve(false /*xhr.status*/); }
            });
        });
    }
}