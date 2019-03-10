---
templateKey: blog
title: Modern font loading best practices for performance
date: '2018-11-09T00:18:04+03:00'
featuredImg: /img/typography-1069409_1920.jpg
description: >-
  By default, font requests are delayed until the render tree is constructed,
  which can result in delayed text rendering commonly known as Flash of
  Invisible Text (FOIT). The browser first constructs the render tree, which is
  dependent on the DOM and CSSOM trees, before it knows which font resources it
  needs in order to render the text. As a result, font requests are delayed well
  after other critical resources, and the browser may be blocked from rendering
  text until the resource is fetched.
category: performance
author: Geoff Okumu
---

<img src='./typography-1069409_1920.jpg' alt='typography'>

By default, font requests are delayed until the render tree is constructed, which can result in delayed text rendering commonly known as Flash of Invisible Text (FOIT). The browser first constructs the render tree, which is dependent on the DOM and CSSOM trees, before it knows which font resources it needs in order to render the text. As a result, font requests are delayed well after other critical resources, and the browser may be blocked from rendering text until the resource is fetched.

GET html -> Build DOM -> GET CSS-> Build CSSOM -> GET font -> render text

### Using <link rel="preload"/

Preloading fonts can reduce FOUT and FOIT. Learn more about preloaing using the rel attribute of the <link> element at [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content). All browsers that support preload also support WOFF2 format, so it makes sense to always preload woff2 fonts only. The preload syntax should be used with the `@font-face` syntax both to provide fallback for unsupported browsers and also tell the browser what to do with the preloaded fonts.

```html
<link
  rel="preload"
  as="font"
  crossorigin="crossorigin"
  type="font/woff2"
  href="myfont.woff2"
/>
```

### Using <link rel="preconnect"/

Link `preconnect` offer almost the same performance gain except instead of downloading the specified asset it establishes a connection and waits to download later when needed

```html
<link rel="preconnect" href="https://example.com" />
```

### Correctly use @font-face syntax

Use `@ font-face` declaration for loading fonts. Allows multiple declaration of font sources thus helping mordern browsers load the smaller WOFF2 format. See the following example loading roboto reguar using the `@font-face` syntax.

```css
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/roboto-v18-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Roboto'), local('Roboto-Regular'),
    url('../fonts/roboto-v18-latin-regular.eot?#iefix') format('embedded-opentype'),
    url('../fonts/roboto-v18-latin-regular.woff2') format('woff2'),
    url('../fonts/roboto-v18-latin-regular.woff') format('woff'), url('../fonts/roboto-v18-latin-regular.ttf')
      format('truetype'),
    url('../fonts/roboto-v18-latin-regular.svg#Roboto') format('svg');
}
```

### Use the 'font-display' property

Customise the browser's font loading behaviour. To prevent a common problem with loading web fonts where browsers fail to render text until the web font is loaded the `font-display` property is used. Its a new API with limited support.

```css
@ font-face {
  font-display: auto;
}
/* Available Options */
font-display: auto;
font-display: block;
font-display: swap;
font-display: fallback;
font-display: optional;
```

### Use simillar system fonts as fallback

Provide fallback for unsupported browsers. Choose a fallback system font that is similar to your desired font.

```css
element {
  font-family: 'FontName', Fallback, sans-serif;
}
```

### Caching using service workers

Using workbox

```js
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
  workbox.strategies.cacheFirst()
)
```
