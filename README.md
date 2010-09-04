This Jetpack-based Firefox addon does a few things to make
[CrisisCamp][] volunteering easy.

Right now, it does the following:

  * The SMS message on [pakreport.crowdflower.com][] is positioned at
    a fixed place at the top-left of the screen, and stays there as
    you scroll, so you don't have to constantly try locating it over
    and over.

  * The category list is no longer a `<select>` element with a
    scroll-bar, but is instead a list of `<div>` elements that can be
    clicked to toggle on and off. This alleviates widget modality,
    allows the browser's "find-in-page" feature to be used to quickly
    search through the categories, and also prevents all categories
    from being wiped due to an accidental mouse click.

  * The Google Map widget has been removed entirely, as it was of
    no use to any volunteers.

The addon should run on Firefox 3.6 and 4.0 betas. If you're using
4.0, you should be able to use it without restarting your browser.

You can get the addon [here][].

  [CrisisCamp]: http://crisiscommons.org/
  [pakreport.crowdflower.com]: http://pakreport.crowdflower.com
  [here]: https://secure.toolness.com/xpi/pakreport.xpi
