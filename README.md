#  nodelogger

> A Lightweight Configurable Colorable Console Logger


## Install

```sh
$ npm install --save nodelogger
```

##Default Configs
```js
{
	logLevel: 'INFO',
    colors: {
        DEBUG: 'blue',
        INFO: 'green',
        WARN: 'yellow',
        ERROR: 'red'
    },
    dateFormat: 'DD/MMM/YYYY:HH:mm:ss.SSS ZZ'
}
```

## Usage

```js

var nodelogger = require('git+https://github.com/dp1140a/nodeLogger.git#master');

log.init({config});
```

## License

Apache2 © [Dave Patton]()
