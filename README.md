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
| isInfinite: Boolean | Removes left arrow on 1 page and hides pages count. |  `<Pagination pagesCount={22} selected={1} isInfinite />` |
| leftPaginationText: String| Text is located near left arrow icon | |
| rightPaginationText: String| Text is located near right arrow icon | |
| pageCounterInvisible: bool | When true the page counter (there is input field between the arrows) is hidden. And TotalPages field is invisible too. | |
| isBelowZeroDisabled: bool | It is disabled changing page value from 0 to max | |
| isUpperThenMaxDisabled: bool | It is disabled changing page value from max to 0 | |
| withoutTotalPages: bool | It's disabled total pages information at the end of the paginator  | |
| isSeparatedPageCounter: bool | It's switched page counter to view with a lot of pages  | |



[build-badge]: https://img.shields.io/travis/crptteam/react-pagination/master.png?style=flat-square
[build]: https://travis-ci.org/crptteam/react-pagination

[npm-badge]: https://img.shields.io/npm/v/@crpt/react-pagination/latest.png?style=flat-square
[npm]: https://www.npmjs.org/package/@crpt/react-pagination

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
