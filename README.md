# react-pagination

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Pagination component with pages count and arrows.

## Usage

```javascript

import { Pagination } from  "@crpt/react-pagination";

<Pagination pagesCount={22} selected={1} onSelect={num => alert(num)} />

```

| PropName | Описание | Пример |
|---|---|---|
| theme: Object | Current theme. |`<Pagination pagesCount={22} selected={1} onSelect={num => alert(num)} theme={defaultTheme}/>`  |
| pagesCount: Number (Required) | Pages count. |  `<Pagination pagesCount={22} selected={1} onSelect={num => alert(num)} />` |
| selected: Number (Required) | Selected page. |  `<Pagination pagesCount={22} selected={1} onSelect={num => alert(num)} />` |
| onSelect: Function (Required) | Fires on page change. |  `<Pagination pagesCount={22} selected={1} onSelect={num => alert(num)} />` |



[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo