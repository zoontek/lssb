## LSSB (Lightweight social share buttons)

[Demo is available on the Github page.](http://zoontek.github.io/lssb/) 

It's a fact: Social share buttons sucks. They request a shitload of css / js, use raster images, and I don't say a word about how difficult is it to align them.
LSSB is heavily inspired by [RRSSB](https://github.com/kni-labs/rrssb) (huge thank to them!), but provide official looking buttons, and doesn't have any requirement (because, you know… lightweight buttons that need jQuery… ugh).
Facebook, Twitter and Google+ are available at this moment.

Did I mention it looks fabulous on high-dpi displays?

## Usage

1) Link to the css file in your head.

```html
<link rel="stylesheet" href="css/lssb.css">
```

2) Link to the js file in your footer.

```html
<script src="js/lssb.js"></script>
```

3) Add buttons, change data-url attributes values.
*(You have a full working example in the /example folder)*

```html
<!-- twitter button -->
<a class="lssb-btn lssb-tw" href="https://twitter.com/share" data-url="https://github.com/zoontek/lssb">
    <span class="lssb-icon lssb-tw-icon">
        <!-- twitter.svg content -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" enable-background="new 0 0 12 12">
            <g fill="#fff">
                <path d="M2.3 7.7c-.1 0-.2-.1-.3-.2h-.6c.2.5.4.9.9 1.2.1.1.2.1.3.2.4-.2.8-.4 1.1-.7-.5 0-.9-.2-1.4-.5zM1.7 4.4c-.3-.2-.6-.5-.8-.9-.1-.3-.2-.5-.2-.7 0 .2-.1.3-.1.5 0 .3.1.6.2.9.2.1.6.2.9.2zM10.8 3.5s-.1 1.3-.3 2-.5 1.2-.9 1.8c-.4.6-.9 1.1-1.4 1.6-.6.5-1.2.8-2 1.1-.8.3-1.6.4-2.5.4-.7 0-1.3-.1-1.9-.3-.4.1-.8.2-1.3.2h-.6c1.1.7 2.4 1.1 3.8 1.1.9 0 1.7-.1 2.5-.4.8-.3 1.4-.6 2-1.1.5-.5 1-1 1.4-1.6.4-.6.7-1.2.9-1.9s.3-1.3.3-2V3.5zM1.6 7.1c-.1-.2-.1-.4-.2-.6h.5c.2 0 .4 0 .7-.1-.6-.1-1.1-.4-1.4-.8-.1-.1-.2-.3-.3-.4-.1 0-.2-.1-.3-.1 0 .6.2 1.1.6 1.6.1.1.3.2.4.4z"/>
            </g>
            <path fill="#23aae3" d="M10.6 2.2c.5-.3.9-.8 1.1-1.4-.5.3-1 .5-1.6.6C9.6.9 9 .6 8.3.6s-1.3.3-1.7.7-.7 1.1-.7 1.8c0 .2 0 .4.1.6-1-.1-1.9-.4-2.8-.8-.9-.5-1.6-1.1-2.3-1.8-.2.4-.3.8-.3 1.2s.1.8.3 1.2.5.7.8.9c-.4 0-.8-.1-1.1-.3 0 .6.2 1.1.6 1.6.3.3.8.6 1.4.7-.3.1-.5.1-.7.1h-.5c.2.5.4.9.9 1.2.5.3.9.5 1.4.5-.9.7-1.9 1.1-3.1 1.1H0c1.1.7 2.4 1.1 3.8 1.1.9 0 1.7-.1 2.5-.4.8-.3 1.4-.6 2-1.1.5-.5 1-1 1.4-1.6s.7-1.2.9-1.9.3-1.3.3-2v-.3c.5-.4.9-.8 1.2-1.3-.6.2-1 .3-1.5.4z"/>
            <g fill="#0091c9">
                <path d="M6.6 2.3c.4-.4 1-.7 1.7-.7s1.3.3 1.8.8c.4-.1.7-.2.5-.2.5-.3.9-.8 1.1-1.4-.5.3-1 .5-1.6.6C9.6.9 9 .6 8.3.6s-1.3.3-1.7.7c-.4.4-.7 1.1-.7 1.8 0 .2 0 .3.1.5 0-.6.3-1 .6-1.3zM.9 2.1c.7.7 1.4 1.3 2.3 1.8.9.4 1.8.7 2.8.8-.1-.2-.1-.4-.1-.6 0-.1 0-.3.1-.4-1-.1-1.9-.4-2.7-.8-1-.5-1.7-1.1-2.4-1.8-.2.4-.3.8-.3 1.2 0 .2 0 .3.1.5 0-.3.1-.5.2-.7z"/>
            </g>
        </svg>
    </span>
    <!-- you can edit the text of a button -->
    <span class="lssb-text lssb-tw-text">Tweet</span>
</a>

<!-- facebook button -->
<a class="lssb-btn lssb-fb" data-url="https://github.com/zoontek/lssb" href="https://www.facebook.com/sharer/sharer.php">
    <span class="lssb-icon lssb-fb-icon">
        <!-- facebook.svg content -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" enable-background="new 0 0 12 12">
            <path fill="#fff" d="M11 0H1C.4 0 0 .4 0 1v10c0 .6.4 1 1 1h5V8H4V6h2V4.3c0-.7.2-1.3.6-1.7.4-.4 1-.6 1.7-.6.4 0 1.2 0 1.7.1V4H9c-.4 0-.6.1-.8.2-.1.2-.2.4-.2.7V6h2v2H8v4h3c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1z"/>
        </svg>
    </span>
    <!-- you can edit the text of a button -->
    <span class="lssb-text lssb-fb-text">Share</span>
</a>

<!-- google+ button -->
<a class="lssb-btn lssb-gp" href="https://plus.google.com/share" data-url="https://github.com/zoontek/lssb">
    <span class="lssb-icon lssb-gp-icon">
        <!-- google.svg content -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" enable-background="new 0 0 14 14">
            <path fill="#dd4b38" d="M7.2 8l-.6-.6c-.2-.1-.5-.3-.5-.7 0-.4.3-.7.5-.9.8-.6 1.5-1.3 1.5-2.6S7.5 1.3 7.2 1h.9L9 0H5.4c-1 0-2.2.1-3.3 1C1.3 1.7.9 2.6.9 3.5c0 1.4 1.1 2.9 3 2.9h.6c0 .1-.1.3-.1.6 0 .6 0 .8.3 1.1-.9.1-2.2.2-3.3.9C.3 9.6 0 10.7 0 11.4 0 12.7 1.3 14 3.9 14c3.2 0 4.8-1.7 4.8-3.5C8.8 9.3 8 8.6 7.2 8zM2.5 2.6c0-.5.1-1 .4-1.4.3-.4.8-.6 1.3-.6C5.7.6 6.5 2.7 6.5 4c0 .3 0 .9-.5 1.3-.2.3-.7.5-1.2.5-1.6 0-2.3-2-2.3-3.2zm2.3 10.6c-2 0-3.2-.9-3.2-2.2s1.1-1.7 1.5-1.8c.8-.3 1.8-.3 1.8-.3h.7c1.1.5 2 1.5 2 2.4-.1 1.1-1 1.9-2.8 1.9zM14 6h-2V4h-1v2H9v1h2v2h1V7h2z"/>
        </svg>
    </span>
    <!-- you can edit the text of a button -->
    <span class="lssb-text lssb-gp-text">Share</span>
</a>
```

## Optionnal attributes

`data-url`
Shared URL.
Default: Page URL

`data-height`
Height of the popup.
Default: 410

`data-width`
Width of the popup.
Default: 580

### For Twitter only

`data-text`
Tweet text.
Default: Page title

`data-hashtags`
Hashtags, separated by a comma.

`data-via`
via @account.

`data-related`
Related accounts, separated by a comma.

## Browser support

IE9+
