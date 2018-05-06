<p align="center">
<img src="media/buid.jpg" width="340">
<br>
  <a href="https://travis-ci.org/CodeDotJS/basic-instagram-user-details">
  <img src="https://travis-ci.org/CodeDotJS/basic-instagram-user-details.svg?branch=master">
  </a>
  ⚫
  <img src="https://camo.githubusercontent.com/b9d624cb37169bb3e06fd6deddabfff02b5e43be/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64655f7374796c652d584f2d3565643963372e737667">
  <br>
  <br>
  <b>A simple API to scrap details of any Instagram user</b>
</p>


## Install

```
$ npm install --save basic-instagram-user-details
```

## Usage

__`User ID`__
```js
const bud = require('basic-instagram-user-details');

const user = 'iama_rishi';

bud(user, 'id').then(id => {
  console.log(id);
  // => { data: '259220806' }
});
```

__`OR`__

```js
bud(user, 'id').then(res => {
  const userId = res.data;
  console.log(userId);
  // => 259220806
});
```

## Example

__`Full Name`__

```js
bud(user, 'fullname').then(fullname => {
  console.log(fullname);
  // => { data: 'Rishi Giri' }
});
```

## API

```js
bud('username', 'options')
```

`username` `:`  __`string`__

`options` `:` __`string`__


| __`Options`__      | __`Output`__  |
|--------------------|---------------|
| __`id`__           | `string`      |
| __`fullname`__     | `string`      |
| __`username`__     | `string`      |
| __`bio`__          | `string`      |
| __`externalUrl`__  | `string`      |
| __`linkshimmed`__  | `string`      |
| __`posts`__        |  `string`     |
| __`followers`__    |  `string`     |
| __`following`__    |  `string`     |
| __`private`__      |  `boolean`    |
| __`verified`__     |  `boolean`    |
| __`connected`__    |  `object`     |

### Why?

Why? Because Instagram is fucking up with everything.

## Related

- __[`instavim`](https://github.com/CodeDotJS/instavim)__ `:` `Command line Instagram media downloader.`
- __[`istalk`](https://github.com/CodeDotJS/instafy)__ `:` `Stalk Instagram users from the command line!`
- __[`instagram-id-of`](https://github.com/CodeDotJS/instagram-id-of)__ `:` `Find UserID of any Instagram user from command line!`
- __[`instagram-profile-picture`](https://github.com/CodeDotJS/instagram-profile-picture)__ `:` `An API to get url to the profile picture and other Instagram medias.`
- __[`instagram-links`](https://github.com/CodeDotJS/Instagram-links)__ `:` `Get links to the publically shared media on Instagram.`

## License

MIT &copy; [Rishi Giri](http://rishigiri.ml);
