WebP Express 0.17.2. Conversion triggered using bulk conversion, 2020-04-07 17:59:17

*WebP Convert 2.3.0*  ignited.
- PHP version: 7.0.33-0ubuntu0.16.04.12
- Server software: Apache/2.4.18 (Ubuntu)

Stack converter ignited

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]/content/uploads/How-To-Get-The-Ahead-Of-Your-Competition-6.png
- destination: [doc-root]/content/webp-express/webp-images/doc-root/shared/content/uploads/How-To-Get-The-Ahead-Of-Your-Competition-6.png.webp
- log-call-arguments: true
- converters: (array of 9 items)

The following options have not been explicitly set, so using the following defaults:
- converter-options: (empty array)
- shuffle: false
- preferred-converters: (empty array)
- extra-converters: (empty array)

The following options were supplied and are passed on to the converters in the stack:
- alpha-quality: 85
- encoding: "auto"
- metadata: "none"
- near-lossless: 60
- quality: 85
------------


*Trying: cwebp* 

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]/content/uploads/How-To-Get-The-Ahead-Of-Your-Competition-6.png
- destination: [doc-root]/content/webp-express/webp-images/doc-root/shared/content/uploads/How-To-Get-The-Ahead-Of-Your-Competition-6.png.webp
- alpha-quality: 85
- encoding: "auto"
- low-memory: true
- log-call-arguments: true
- metadata: "none"
- method: 6
- near-lossless: 60
- quality: 85
- use-nice: true
- command-line-options: ""
- try-common-system-paths: true
- try-supplied-binary-for-os: true

The following options have not been explicitly set, so using the following defaults:
- auto-filter: false
- default-quality: 85
- max-quality: 85
- preset: "none"
- size-in-percentage: null (not set)
- skip: false
- rel-path-to-precompiled-binaries: *****
- try-cwebp: true
- try-discovering-cwebp: true
------------

Encoding is set to auto - converting to both lossless and lossy and selecting the smallest file

Converting to lossy
Looking for cwebp binaries.
Discovering if a plain cwebp call works (to skip this step, disable the "try-cwebp" option)
- Executing: cwebp -version. Result: version: *0.4.4*
We could get the version, so yes, a plain cwebp call works
Discovering binaries using "which -a cwebp" command. (to skip this step, disable the "try-discovering-cwebp" option)
Found 1 binaries: 
- /usr/bin/cwebp
Discovering binaries by peeking in common system paths (to skip this step, disable the "try-common-system-paths" option)
Found 1 binaries: 
- /usr/bin/cwebp
Discovering binaries which are distributed with the webp-convert library (to skip this step, disable the "try-supplied-binary-for-os" option)
Checking if we have a supplied precompiled binary for your OS (Linux)... We do. We in fact have 3
Found 3 binaries: 
- [doc-root]/content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64
- [doc-root]/content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64-static
- [doc-root]/content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-061-linux-x86-64
Detecting versions of the cwebp binaries found
- Executing: cwebp -version. Result: version: *0.4.4*
- Executing: /usr/bin/cwebp -version. Result: version: *0.4.4*
- Executing: [doc-root]/content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64 -version. Result: *Exec failed*. Permission denied (user: "www-data" does not have permission to execute that binary)
- Executing: [doc-root]/content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64-static -version. Result: *Exec failed*. Permission denied (user: "www-data" does not have permission to execute that binary)
- Executing: [doc-root]/content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-061-linux-x86-64 -version. Result: *Exec failed*. Permission denied (user: "www-data" does not have permission to execute that binary)
Binaries ordered by version number.
- cwebp: (version: 0.4.4)
- /usr/bin/cwebp: (version: 0.4.4)
Trying the first of these. If that should fail (it should not), the next will be tried and so on.
Creating command line options for version: 0.4.4
Quality: 85. 
*The near-lossless option is not supported on this (rather old) version of cwebp- skipping it.* 
Trying to convert by executing the following command:
nice cwebp -metadata none -q 85 -alpha_q '85' -m 6 -low_memory '[doc-root]/content/uploads/How-To-Get-The-Ahead-Of-Your-Competition-6.png' -o '[doc-root]/content/webp-express/webp-images/doc-root/shared/content/uploads/How-To-Get-The-Ahead-Of-Your-Competition-6.png.webp.lossy.webp' 2>&1

*Output:* 
Saving file '[doc-root]/content/webp-express/webp-images/doc-root/shared/content/uploads/How-To-Get-The-Ahead-Of-Your-Competition-6.png.webp.lossy.webp'
File:      [doc-root]/content/uploads/How-To-Get-The-Ahead-Of-Your-Competition-6.png
Dimension: 744 x 400
Output:    13754 bytes Y-U-V-All-PSNR 49.01 53.70 52.71   50.01 dB
block count:  intra4: 312
              intra16: 863  (-> 73.45%)
              skipped block: 779 (66.30%)
bytes used:  header:            381  (2.8%)
             mode-partition:   1783  (13.0%)
 Residuals bytes  |segment 1|segment 2|segment 3|segment 4|  total
  intra4-coeffs:  |     604 |    4324 |    5381 |       0 |   10309  (75.0%)
 intra16-coeffs:  |       0 |       0 |      90 |      28 |     118  (0.9%)
  chroma coeffs:  |       1 |    1012 |      34 |      86 |    1133  (8.2%)
    macroblocks:  |       0%|      10%|      27%|      61%|    1175
      quantizer:  |      20 |      18 |      15 |      12 |
   filter level:  |       7 |       3 |       2 |       2 |
------------------+---------+---------+---------+---------+-----------------
 segments total:  |     605 |    5336 |    5505 |     114 |   11560  (84.0%)

Success
Reduction: 60% (went from 34 kb to 13 kb)

Converting to lossless
Looking for cwebp binaries.
Discovering if a plain cwebp call works (to skip this step, disable the "try-cwebp" option)
- Executing: cwebp -version. Result: version: *0.4.4*
We could get the version, so yes, a plain cwebp call works
Discovering binaries using "which -a cwebp" command. (to skip this step, disable the "try-discovering-cwebp" option)
Found 1 binaries: 
- /usr/bin/cwebp
Discovering binaries by peeking in common system paths (to skip this step, disable the "try-common-system-paths" option)
Found 1 binaries: 
- /usr/bin/cwebp
Discovering binaries which are distributed with the webp-convert library (to skip this step, disable the "try-supplied-binary-for-os" option)
Checking if we have a supplied precompiled binary for your OS (Linux)... We do. We in fact have 3
Found 3 binaries: 
- [doc-root]/content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64
- [doc-root]/content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64-static
- [doc-root]/content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-061-linux-x86-64
Detecting versions of the cwebp binaries found
- Executing: cwebp -version. Result: version: *0.4.4*
- Executing: /usr/bin/cwebp -version. Result: version: *0.4.4*
- Executing: [doc-root]/content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64 -version. Result: *Exec failed*. Permission denied (user: "www-data" does not have permission to execute that binary)
- Executing: [doc-root]/content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-103-linux-x86-64-static -version. Result: *Exec failed*. Permission denied (user: "www-data" does not have permission to execute that binary)
- Executing: [doc-root]/content/plugins/webp-express/vendor/rosell-dk/webp-convert/src/Convert/Converters/Binaries/cwebp-061-linux-x86-64 -version. Result: *Exec failed*. Permission denied (user: "www-data" does not have permission to execute that binary)
Binaries ordered by version number.
- cwebp: (version: 0.4.4)
- /usr/bin/cwebp: (version: 0.4.4)
Trying the first of these. If that should fail (it should not), the next will be tried and so on.
Creating command line options for version: 0.4.4
*The near-lossless option is not supported on this (rather old) version of cwebp- skipping it.* 
Trying to convert by executing the following command:
nice cwebp -metadata none -q 85 -alpha_q '85' -lossless -m 6 -low_memory '[doc-root]/content/uploads/How-To-Get-The-Ahead-Of-Your-Competition-6.png' -o '[doc-root]/content/webp-express/webp-images/doc-root/shared/content/uploads/How-To-Get-The-Ahead-Of-Your-Competition-6.png.webp.lossless.webp' 2>&1

*Output:* 
Saving file '[doc-root]/content/webp-express/webp-images/doc-root/shared/content/uploads/How-To-Get-The-Ahead-Of-Your-Competition-6.png.webp.lossless.webp'
File:      [doc-root]/content/uploads/How-To-Get-The-Ahead-Of-Your-Competition-6.png
Dimension: 744 x 400
Output:    13776 bytes
Lossless-ARGB compressed size: 13776 bytes
  * Lossless features used: SUBTRACT-GREEN
  * Precision Bits: histogram=4 transform=4 cache=9

Success
Reduction: 60% (went from 34 kb to 13 kb)

Picking lossy
cwebp succeeded :)

Converted image in 453 ms, reducing file size with 60% (went from 34 kb to 13 kb)
