define(["knockout","bootstrap","./messages"], function (ko, messages) {

        ko.components.register('favorite-list', { require: '/app/components/favorite-list.js' });

        ko.applyBindings();

    },
    function (err) {
        console.error('ERROR : ', err.requireType);
        console.error('MODULES : ', err.requireModules);
    }
);
