# Random Qoute Machine

Project for the challenge *Build a random quote machine*.

This project will make use of the API from [Andruxnet](https://market.mashape.com/andruxnet/random-famous-quotes). 

You will need to create a account to be able to get a API KEY

The JSON response consist of the following items:

```
{
  "quote": "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.",
  "author": "Sherlock Holmes",
  "category": "Famous",
}
```

## Creating the Twitter Button
The documentation to how to create a button for twitter, is available from this link [Twitter Button](https://dev.twitter.com/web/tweet-button/web-intent).

Use the **encodeURIComponent** to encode the qoute for twitter.
