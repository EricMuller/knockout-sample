// For any third party dependencies, like jQuery, place them in the lib folder.
// https://blog.clever-age.com/fr/2015/11/25/requirejs-et-le-code-javascript-modulaire/
// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling directory.

requirejs.config({
    /* Le paramètre baseUrl permet de spécifier un  préfixe à appliquer à tous les chemins
       qu'utilisera RequireJS pour résoudre les chemins  d'accès aux modules.
       S'il n'est pas précisé, tous les chemins sont résolus par rapport à  l'emplacement du fichier app.js.
       Dans cet  exemple on considère que tous nos modules sont  dans le répertoire 'lib', lui même au même  niveau
       que notre fichier main.js */
    baseUrl: '/app',
    /* l'objet path va permettre de faire une  association entre un nom de module et son chemin d'accès.
     Si vous ne faite pas ça, RequireJS considère que le nom d'un module est le nom du fichier (sans l'extension .js)
     précédé de son chemin relatif par rapport au fichier app.js */
    paths: {
        'knockout': '/lib/knockout-3.5.0-min',
        'text': '/lib/require-text-2.0.12-min',
        'jquery': '/lib/jquery-3.5.1.slim.min',
        'bootstrap': '/lib/bootstrap.4.5.3.min'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app']);
