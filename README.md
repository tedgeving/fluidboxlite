=== Fluidboxlite ===
Contributors: tedgeving
Tags: jquery, fluidbox
Requires at least: 3.0.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Fluidboxlite is a WordPress plugin wrapper for Terry Munn's Fluidbox Plugin (https://github.com/terrymun/Fluidbox)

== Installation ==

1. Download or clone the repository to the plugins directory.
2. Login to WordPress and Enable the plugin.
3. The plugin has no options / settings.  By default it will be enabled for all WordPress galleries and images that have the following structure:
`<a href="/path/to/image" title="">
    <img src="/path/to/image" alt="" title="" />
</a>`
4. Modify the jQuery selector behavior in the following file:
`plugins/fluidboxlite/public/js/fluidboxlite-public.js`


== Usage ==
See the official documentation at: http://terrymun.github.io/Fluidbox/demo/index.html
