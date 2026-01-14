---
title: "Buttons with custom shapes"
datePublished: 2018-01-18T23:01:02+00:00
cover: /images/ezlMBdLCa.jpeg
tags: ["web-design", "web-development"]

---




Did you know you can create hyperlinks on SVG shapes? The <a> tag is valid inside <svg>.

![](/images/9rJTyGhVD.webp)

Most links (`&lt;a&gt;`) elements on the web are rectangles.

```
<a href="#">I'm a link.</a>
```


![](/images/rpiQkx1Pi.webp)

And for most cases, this is perfectly fine. But what if you want a circular link?

### A primitive solution

One common method is to create and link an image.

```
<a href="#">
  <img src="circle-link.webp" alt="I'm a link.">
</a>
```


![](/images/e6uWyLrpO.webp)

But there are quite a few disadvantages to this technique:

1. The linked area is actually still rectangular.

1. The text is not selectable.

1. An `alt` attribute is required for accessibility and indexing purposes.

1. You can’t (without creating another image) change the visual style of this link on focus, hover, visited, etc.

The reason the linked area above is still rectangular is because images on the web — even if they don’t *appear* to be — are always rectangular.

In fact, this is how most elements are. `div`, `p`, `table`, `h1`, and pretty much any element you may be familiar with: as far as the browser is concerned, they are all rectangular by default.

```
<div>I'm a div.</div>

<p>I'm a paragraph</p>

<table>
  <tbody>
    <tr>
      <td>I'm</td>
      <td>a</td>
      <td>table.</td>
    </tr>
  </tbody>
</table>

<h1>I'm a heading.</h1>
```


![](/images/C4Q7Un773.webp)

### A better solution

You can, however, define elements of other shapes! The solution comes to us from scalable vector graphics (SVG).

Here’s a circle:

```
<svg width="120" height="120">
  <circle cx="60"
          cy="60"
          r="60" />
</svg>
```


![](/images/xj6CMwiH0.webp)

You can even change the color.

```
<svg width="120" height="120">
  <circle cx="60"
          cy="60"
          r="60"
          **fill="#007BFF"** />
</svg>
```


![](/images/VJ3GGE7jy.webp)

And you can place text over it.

```
<svg width="120" height="120">
  <circle cx="60"
          cy="60"
          r="60"
          fill="#007BFF" />
  
  **<text x="60"
        y="60"
        fill="#FFFFFF"
        text-anchor="middle"
        alignment-baseline="middle">
    I'm a circle.
  </text>**
</svg>
```


![](/images/UKt0uwv6r.webp)

And best of all, you can wrap both the `circle` and the `text` in an `&lt;a&gt;` tag.

```
<svg width="120" height="120">
  **<a href="#">**
    <circle cx="60"
            cy="60"
            r="60"
            fill="#007BFF" />
  
    <text x="60"
          y="60"
          fill="#FFFFFF"
          text-anchor="middle"
          alignment-baseline="middle">
      I'm a link.
    </text>
  **</a>**
</svg>
```


The clickable part of the link is the actual circle (and text) element.

![](/images/pfkPwIyAW.webp)

You can use CSS to change the style on hover.

```
a:hover circle { fill: #00B2FF; }
```


![](/images/a1PauEa5H.webp)

### Custom shapes

You can link other elements besides `circle`. If you want to define a custom shape, you could use [the `&lt;path&gt;` element](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths).

```
<!-- HTML -->

<svg width="120" height="120">
  <a href="#">
    <path d="M   0   0
             L 120   0
             L 120 120
             L  60  80
             L   0 120
             Z"
          fill="#007BFF"/>
  
    <text x="60"
          y="50"
          fill="#FFFFFF"
          text-anchor="middle"
          alignment-baseline="middle">
      I'm a link.
    </text>
  </a>
</svg>

/* CSS */

a:hover path { fill: #00B2FF }
```


![](/images/cvkJJDBC4.webp)

With `&lt;path&gt;` the possibilities really are endless. You can create the exact shape you need by defining its points in the `d` attribute.

### I thought you said custom *BUTTONS, not links.*

I tend to use the terms **link** and **button** interchangeably nowadays because, while one might be more semantically correct in a given situation, anything one can do, the other can do, too.

Say you want to create a custom-shaped button that submits a form.

First, build the form.

```
<form id="myForm" method="post">
  <input name="userName" placeholder="Your name" /><br>
  
  <!-- submit button goes here -->
</form>
```


Add a custom-shaped button usingSVG.

```
<form id="myForm" method="post">
  <input name="userName" placeholder="Your name" /><br>
  
  **<svg width="120" height="50">
    <a href="#" id="submitBtn">
      <path d="M   0  10
               L  50  10
               L  60   0
               L  70  10
               L 120  10
               L 120 120
               L  60  80
               L   0 120
               Z"
            fill="#007BFF"/>**

      <text x="60"
            y="30"
            fill="#FFFFFF"
            text-anchor="middle"
            alignment-baseline="middle">
        Submit
      </text>
    </a>
  </svg>
</form>
```


Notice the `id` attributes on both the form and the link.

Now, wire up the button in JavaScript.

```
document.getElementById('submitBtn')
  .addEventListener('click', () => {
      document.getElementById('myForm').submit();
  });
```


The code above…

1. Gets a reference to the submit button

1. Listens for a click event

1. When clicked, gets a reference to the form itself

1. Submits it

You can try it out here:


And here are some other examples to give you some inspiration.
