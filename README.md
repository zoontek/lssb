## LSSB (Lightweight social share buttons)

![](https://dl.dropboxusercontent.com/u/4181800/lssb.png)

It's a fact: Social share buttons sucks. They request a shitload of css / js, use raster images, and I don't say a word about how difficult is it to align them.
LSSB is heavily inspired by [RRSSB](https://github.com/kni-labs/rrssb) (huge thank to them!), but provide official looking buttons, and doesn't have any requirement (because, you know… lightweight buttons that need jQuery… ugh).
Facebook, Twitter and Google+ are available at this moment.

Did I mention it looks fabulous on high-dpi displays?

![](https://dl.dropboxusercontent.com/u/4181800/lssb_retina.png)

## Usage

1) Link to the css file in your head.

```html
<link rel="stylesheet" href="css/lssb.css">
```

2) Link to the js file in your footer.
*(Optionnal. Only required if you use popups)*

```html
<script src="js/lssb.js"></script>
```

3) Copy buttons in a lssb wrapper div. Change popup dimensions or remove it if you want. Change URL.
*(You have a full working example in the /example folder)*

```html
<!-- optionnal wrapper -->
<div>
    <!-- facebook button -->
    <a class="lssb-btn lssb-fb popup" data-height="340" data-width="670" href="https://www.facebook.com/sharer/sharer.php?u=https://github.com/zoontek/lssb">
        <span class="lssb-icon lssb-fb-icon">
            <!-- facebook.svg content -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" enable-background="new 0 0 12 12">
                <path fill="#fff" d="M11 0H1C.4 0 0 .4 0 1v10c0 .6.4 1 1 1h5V8H4V6h2V4.3c0-.7.2-1.3.6-1.7.4-.4 1-.6 1.7-.6.4 0 1.2 0 1.7.1V4H9c-.4 0-.6.1-.8.2-.1.2-.2.4-.2.7V6h2v2H8v4h3c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1z"/>
            </svg>
        </span>
        <!-- you can edit the text of a button -->
        <span class="lssb-text lssb-fb-text">Share</span>
    </a>
</div>
```

## Road to the first final version (aka Todo)

**For Twitter**
- data-url, data-text, data-via, data-related, data-hashtags attributes.
- Prevent 140 characters max (will truncate if necessary).

**For Facebook and Google+**
- data-url attribute.

## Browser support

LSSB is currently a pre-version in active development. So IE9+, I guess.
