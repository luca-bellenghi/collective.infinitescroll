Introduction
============

Integration of infinite scroll from Paul Irish for Plone
https://github.com/paulirish/infinite-scroll

collective.infinitescroll for Plone replaces batched views with an infinite
scroll mechanism, which appends the contents of the next page to the current
view via ajax.
It's an unintrusive javascript and doesn't alter any of the templates.

.. note::
  paulirish's infinite-scroll jQuery plugin parses the "next" button only on
  initialization and calculates the urls to retrieve the contents by
  incrementing an page counter.  Plone uses an item-offset instead of page
  numbers. For Plone a more generic approach would be better: Parsing the
  "next" buttons url on each ajax request.

.. note::
  The batch size is taken parsing pagination links href attribute.

Author
======

Johannes Raggam, Peter Holzer, BlueDynamics Alliance <dev@bluedynamics.com>
Luca Bellenghi <sviluppoplone@redturtle.it>
