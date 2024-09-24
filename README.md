
### Manual Configuration
- Add new product: {
    "Name": "Heart Saver",
    "Price": "20.00 USD",
    "Billing Period: "Monthly",
}
- Add features the product: {
    "Product": "Heart Saver",
    "Feature": "Access to Virtual Lessons",
}

### References
- [Mozilla - URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams): defines utility methods to work with the query string of a URL
```
// Can also constructor from another URLSearchParams
const params = new URLSearchParams('q=search+string&version=1&person=Eric');

params.get('q') === "search string"
params.get('version') === "1"
Array.from(params).length === 3
```
[Easy URL manipulation with URLSearchParams ](https://developer.chrome.com/blog/urlsearchparams#urlsearchparams_api)
- [Mozilla - Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API):  run a script operation in a background thread separate from the main execution thread of a web application. The advantage of this is that laborious processing can be performed in a separate thread, allowing the main (usually the UI) thread to run without being blocked/slowed down.

### Additonal Resources
- [Mozilla - Payments Handler API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Handler_API)
