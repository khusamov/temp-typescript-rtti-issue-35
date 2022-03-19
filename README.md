temp-typescript-rtti-issue-35
=============================

https://github.com/typescript-rtti/typescript-rtti/issues/35

Test code: `src/index.ts`.

Run
---

```bash
yarn
yarn start
```

Error:

```bash
Server running at http://localhost:1234

console: RTTI: During outboard metadata collection for class IoC: Cannot read properties of undefined (reading 'flags')


console: RTTI: Failed to build source file /Users/khusamov/Documents/repo/github.com/khusamov/temp-typescript-rtti-issue-35/src/index.ts: Cannot
read properties of undefined (reading 'flags') [please report]


Error: Cannot read properties of undefined (reading 'flags')

  TypeError: Cannot read properties of undefined (reading 'flags')
  at TypeEncoder.typeLiteral
  (/Users/khusamov/Documents/repo/github.com/khusamov/temp-typescript-rtti-issue-35/node_modules/typescript-rtti/dist/transformer/type-encoder.js:194:30)
  at TypeEncoder.referToType
  (/Users/khusamov/Documents/repo/github.com/khusamov/temp-typescript-rtti-issue-35/node_modules/typescript-rtti/dist/transformer/type-encoder.js:38:29)
  at TypeEncoder.referToTypeNode
  (/Users/khusamov/Documents/repo/github.com/khusamov/temp-typescript-rtti-issue-35/node_modules/typescript-rtti/dist/transformer/type-encoder.js:29:21)
  at TypeEncoder.referToTypeOfInitializer
  (/Users/khusamov/Documents/repo/github.com/khusamov/temp-typescript-rtti-issue-35/node_modules/typescript-rtti/dist/transformer/type-encoder.js:25:25)
  at MetadataEncoder.params
  (/Users/khusamov/Documents/repo/github.com/khusamov/temp-typescript-rtti-issue-35/node_modules/typescript-rtti/dist/transformer/metadata-encoder.js:190:99)
  at MetadataEncoder.method
  (/Users/khusamov/Documents/repo/github.com/khusamov/temp-typescript-rtti-issue-35/node_modules/typescript-rtti/dist/transformer/metadata-encoderServer running at http://localhost:1234
🚨 Build failed.

parcel-transformer-ttypescript: Cannot read properties of null (reading 'kind')

  TypeError: Cannot read properties of null (reading 'kind')
  at isOuterExpression
  (/Users/khusamov/Documents/repo/github.com/khusamov/temp-typescript-rtti-issue-35/node_modules/typescript/lib/typescript.js:29305:22)
  at Object.skipOuterExpressions
  (/Users/khusamov/Documents/repo/github.com/khusamov/temp-typescript-rtti-issue-35/node_modules/typescript/lib/typescript.js:29324:16)
  at Object.skipPartiallyEmittedExpressions
  (/Users/khusamov/Documents/repo/github.com/khusamov/temp-typescript-rtti-issue-35/node_modules/typescript/lib/typescript.js:13132:19)
  at Object.parenthesizeExpressionForDisallowedComma
  (/Users/khusamov/Documents/repo/github.com/khusamov/temp-typescript-rtti-issue-35/node_modules/typescript/lib/typescript.js:21492:40)
  at Object.createPropertyAssignment
  (/Users/khusamov/Documents/repo/github.com/khusamov/temp-typescript-rtti-issue-35/node_modules/typescript/lib/typescript.js:25688:53)
  at
  /Users/khusamov/Documents/repo/github.com/khusamov/temp-typescript-rtti-issue-35/node_modules/typescript-rtti/dist/transformer/rt-helper.js:33:77
  at Array.map (<anonymous>)
  at rtStore
  (/Users/khusamov/Documents/repo/github.com/khusamov/temp-typescript-rtti-issue-35/node_modules/typescript-rtti/dist/transformer/rt-helper.js:33:53)
  at
  /Users/khusamov/Documents/repo/github.com/khusamov/temp-typescript-rtti-issue-35/node_modules/typescript-rtti/dist/transformer/index.js:172:91
  at transformSourceFileOrBundle
  (/Users/khusamov/Documents/repo/github.com/khusamov/temp-typescript-rtti-issue-35/node_modules/typescript/lib/typescript.js:88940:57)

```