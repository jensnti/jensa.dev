---
title: Christmas and Particle Snow
emphasis: 2
date: 2024-12-17
summary: "It has to snow, of course, and sooner or later we all write a particle generator."
tags: [ 'javascript', 'christmas']
---

For several years, we have ended the term by creating some form of Christmas card (or winter card). The cards have come in various forms, but most have included some form of particle snow. This year is no different, and now I have used the code on this page as well.

> Look, it's snowing, look, it's snowing, it must be particles, hooray!

## How does it work?

To create and draw the particles, I use a canvas element. With JavaScript, the particles are then drawn on the canvas. The particles move in random directions and speeds. When a particle has moved far enough outside the canvas, it is removed, and a new particle is created.

The actual updating and drawing of the particles occur in a loop that runs with `requestAnimationFrame`.

## The Task

The task I created is available on [Github - wu1-vinter](https://github.com/jensadev/wu1-vinter), and it is made for the Web Development 1 course. Since it is in Web Development 1, there are no programming requirements.

The submission is in the form of a Christmas greeting with the page hosted on GitHub Pages.

### Variant for Web Server

We have also made a Christmas card variant for Web Server Programming 1, where we use query parameters on an Express server to create a personal greeting. We host the server on [Glitch - Vinterkort](https://perfect-delirious-mambo.glitch.me/?title=God%20jul&message=med%20webbserver).

The submission here is also a link with a Christmas greeting.

## Summary

So with that said, I wish you all a very Merry Christmas and a Happy New Year!

If you're looking for the code, it's available on GitHub.