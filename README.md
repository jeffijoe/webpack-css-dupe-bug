# Webpack Style Loader + CSS Modules bug

This repo is a reproduction of an issue with using CSS Modules and Style Loader.

When using CSS Modules `composes`, the referenced file gets added as a style twice.
Changing the `injectType` to `singletonStyleTag` has no effect, the contents are added multiple times.

I've included the built output for using `MiniCssExtractPlugin` which works fine and only includes the referenced file once.
