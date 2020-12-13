define(["knockout", "text!/app/components/favorite-list.html"], function (ko, templateString) {


    var initialData = [
        {
            description: "oracle",
            url: "https://www.java.com/fr/",
            tags: [
                {libelle: "Java"}
            ]
        },
        {
            description: "Spring",
            url: "https://spring.io/",
            tags: [
                {libelle: "Spring"},
                {libelle: "Java"}
            ]
        }
    ];

    var FavoritesModel = function (favorites) {
        var self = this;

        self.favorites = ko.observableArray(ko.utils.arrayMap(favorites, function (favorite) {
            return {
                description: favorite.description,
                url: favorite.url,
                tags: ko.observableArray(favorite.tags)
            };
        }));

        self.addFavorite = function () {
            self.favorites.push({
                description: "",
                url: "",
                tags: ko.observableArray()
            });
        };

        self.removeFavorite = function (favorite) {
            self.favorites.remove(favorite);
        };

        self.addTag = function (favorite) {
            favorite.tags.push({
                libelle: ""
            });
        };

        self.removeTag = function (tag) {
            $.each(self.favorites(), function () {
                this.tags.remove(tag)
            })
        };

        self.save = function () {
            self.lastSavedJson(JSON.stringify(ko.toJS(self.favorites), null, 2));
        };

        self.lastSavedJson = ko.observable("");
    };

    return { viewModel: FavoritesModel(initialData), template: templateString };
});

