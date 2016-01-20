# jshint-failure

## Setup
 1. run `npm install`
 2. run `npm run ci-lint` - There should not be any jshint failures at this point
 3. run `npm install jshint@2.9.1 --save-dev` - jshint would fail with following errors

```
[17:02:58] Starting 'lint'...
index.js: line 4, col 2, Missing "use strict" statement.

1 error
cyclomaticComplexity.js: line 4, col 5, Incompatible values for the 'strict' and 'globalstrict' linting options. (25% scanned).

1 error
[17:02:59] 'lint' errored after 76 ms
[17:02:59] Error in plugin 'gulp-jshint'
Message:
    JSHint failed for: index.js, cyclomaticComplexity.js

npm ERR! Windows_NT 6.3.9600
npm ERR! argv "C:\\Program Files\\nodejs\\\\node.exe" "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js" "run" "ci-li
nt"
npm ERR! node v0.12.7
npm ERR! npm  v3.5.0
npm ERR! code ELIFECYCLE
npm ERR! jshint-failure@1.0.0 ci-lint: `gulp lint`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the jshint-failure@1.0.0 ci-lint script 'gulp lint'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the jshint-failure package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     gulp lint
npm ERR! You can get their info via:
npm ERR!     npm owner ls jshint-failure
npm ERR! There is likely additional logging output above.
```
 
