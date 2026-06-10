# Repro of bundle analyzer in RSBuild

How to run it:
`npm run build:analyze` should display the webpack bundle analyzer analysis in the browser

RSBuild v2 doesn't open empty analysis (no data in it) "No bundles were parsed. Analyzer will show only original module sizes from stats file." in the terminal

https://rsbuild.rs/guide/upgrade/v1-to-v2#remove-performancebundleanalyze

RSBuild v1 open analysis but you cannot change the tabs in the side panel to gzipped/parsed.
