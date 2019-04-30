# Redact.js

Not every product on the web needs to be an app. What happens to your process when you can focus on designing views and stop thinking about how to stitch them together? *Redact* is a zero-configuration Javascript library that adds a layer of smooth and fast in-page interaction to your web pages. All you have to do is add some hints to the HTML you already have.

This project follows in the footsteps of libraries like Turbolinks and Stimulus. It believes that the best place for your business and rendering logic is on the server, that you should send your users HTML, and that Javascript is best suited for progressively-enhanced DOM manipulation.

- *Increased stability.* An HTML-powered product means your inputs and outputs are much easier to predict, which means your app is much easier to test. Progressively enhance your UX with stable code that you don't need to worry about.

- *App-like responsiveness.* Define subtle interactions with markup instead of code. Pair Redact with Turbolinks for an even more seamless experience!

- *Effortless modals.* Add a modal hint to any internal link and the contents of that link will open inline as a modal while preserving URLs and navigation history.

- *Easier caching.* Keep your pages small and focused and use Redact's powerful inline-prefetch features to compose them into complex views. Now you don't need to think about fragment caching—it's all just pages.

- *Eject as necessary.* Redact's API was inspired by Stimulus and the two libraries work happily together. Redact is designed to never allow extension with client-side code, but if you ever need to add your own logic, you can drop in Stimulus controllers without disrupting your workflow or your existing Redact hints.

# Features

## Prefetch

Replaces an `<a>` tag with the contents of the link it points to. Must be the same host but a different path.

    <a data-redact-prefetch="main">Thumbnails</a>

### Arguments

- selector in target document to use (optional, defaults to `body`)

## Inline loading

When the link is followed, loads the document it links to in a specified selector on the current page. Used for modals, partial page changes, preserving state in i.e. sidebar, etc.

    <a data-redact-inline=".sidebar, main">Menu</a>

### Arguments

- selector for target in current document to replace (optional, defaults to `body`)
- selector in target document to use (optional, defaults to `body`)

## Autosubmit

Submits a form automatically on change.

    <form data-redact-auto>

    <select data-redact-auto>

## Toggle

Controls a class on a target element when the user interacts with the current element. When used on a `<button>`, the class is toggled. On an `<input>` of type `checkbox` or `radio`, the class's presence is synced with the checked state of the input (i.e. if the input is checked, the class is added).

    <button data-redact-toggle=".menu, menu--visible">

### Arguments

- selector of element to modify
- class to toggle

## Remove

When a `<button>` with this hint is clicked, the target node is removed from the DOM.

    <button data-redact-remove=".modal">

### Arguments

- selector of element to remove

## Hotkey

Treat the user pressing the specified keyboard shortcut as a click on this button or link.

    <button data-react-hotkey="ctrl, s">

### Arguments

- the key to press (case-insensitive)
- one or more modifers that must also be depressed (optional, any of ctrl, control, command, cmd, shift, alt, opt, or option)
- note that ctrl, control, cmd, and command are all synonyms, as are alt, opt, and option
- note that arguments may appear in any order

## Current (auto feature)

Any `<a>` whose `href` matches the current URL will automatically receive the `redact-link--current` class. A `<a>` whose `href` matches the current URL _including the fragment_ will additionally receive the `redact-link--current-fragment` class. If the location or fragment changes, these links will be updated on all `<a>` tags as necessary.

