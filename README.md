<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# CompactAdjacencyMatrix

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compact adjacency matrix constructor.



<section class="usage">

## Usage

```javascript
import CompactAdjacencyMatrix from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-compact-adjacency-matrix@esm/index.mjs';
```

#### CompactAdjacencyMatrix( N )

Returns a compact adjacency matrix instance.

```javascript
var adj = new CompactAdjacencyMatrix( 4 );
// returns <CompactAdjacencyMatrix>

// ...

adj.addEdge( 0, 1 );
adj.addEdge( 0, 2 );
adj.addEdge( 1, 2 );
adj.addEdge( 2, 3 );
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import CompactAdjacencyMatrix from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-compact-adjacency-matrix@esm/index.mjs';

// Create a new adjacency matrix:
var adj = new CompactAdjacencyMatrix( 4 );

// Add edges:
adj.addEdge( 1, 0 );
adj.addEdge( 1, 2 );
adj.addEdge( 0, 2 );
adj.addEdge( 2, 3 );

// Compute the indegrees and outdegrees for each vertex:
var id;
var od;
var i;
for ( i = 0; i < 4; i++ ) {
    id = adj.inDegree( i );
    od = adj.outDegree( i );
    console.log( 'vertex: %d. indegree: %d. outdegree: %d.', i, id, od );
}

// Print the list of all edges:
console.log( adj.edges );
// => [ [ 0, 2 ], [ 1, 0 ], [ 1, 2 ], [ 2, 3 ] ]

// Convert the adjacency matrix to an adjacency list representation:
console.log( adj.toAdjacencyList() );
// => [ [ 2 ], [ 0, 2 ], [ 3 ], [] ]

// Compute a topological ordering:
console.log( adj.toposort() );
// => [ [ 1, 0, 2, 3 ], null ]

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-compact-adjacency-matrix.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-compact-adjacency-matrix

[test-image]: https://github.com/stdlib-js/utils-compact-adjacency-matrix/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-compact-adjacency-matrix/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-compact-adjacency-matrix/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-compact-adjacency-matrix?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-compact-adjacency-matrix.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-compact-adjacency-matrix/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-compact-adjacency-matrix/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-compact-adjacency-matrix/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-compact-adjacency-matrix/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-compact-adjacency-matrix/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-compact-adjacency-matrix/main/LICENSE

</section>

<!-- /.links -->
