WebP Express 0.17.2. Conversion triggered using bulk conversion, 2019-11-29 21:20:58

Converter set to: cwebp

*WebP Convert 2.3.0*  ignited.
- PHP version: 7.0.33-0ubuntu0.16.04.7
- Server software: Apache/2.4.18 (Ubuntu)

Cwebp converter ignited
Destination folder does not exist. Creating folder: [doc-root]/content/webp-express/webp-images/doc-root/content/plugins/webp-express/test

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]/content/plugins/webp-express/test/test-pattern-tv.jpg
- destination: [doc-root]/content/webp-express/webp-images/doc-root/content/plugins/webp-express/test/test-pattern-tv.jpg.webp
- encoding: "auto"
- low-memory: true
- log-call-arguments: true
- metadata: "none"
- method: 6
- near-lossless: 60
- quality: 70
- use-nice: true
- command-line-options: ""
- try-common-system-paths: true
- try-supplied-binary-for-os: true

The following options have not been explicitly set, so using the following defaults:
- alpha-quality: 85
- auto-filter: false
- default-quality: 75
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
Quality: 70. 
Consider setting quality to "auto" instead. It is generally a better idea
*The near-lossless option is not supported on this (rather old) version of cwebp- skipping it.* 
Trying to convert by executing the following command:
nice cwebp -metadata none -q 70 -alpha_q '85' -m 6 -low_memory '[doc-root]/content/plugins/webp-express/test/test-pattern-tv.jpg' -o '[doc-root]/content/webp-express/webp-images/doc-root/content/plugins/webp-express/test/test-pattern-tv.jpg.webp.lossy.webp' 2>&1

*Output:* 
Saving file '[doc-root]/content/webp-express/webp-images/doc-root/content/plugins/webp-express/test/test-pattern-tv.jpg.webp.lossy.webp'
File:      [doc-root]/content/plugins/webp-express/test/test-pattern-tv.jpg
Dimension: 340 x 280
Output:    6856 bytes Y-U-V-All-PSNR 41.19 43.47 44.16   41.90 dB
block count:  intra4: 276
              intra16: 120  (-> 30.30%)
              skipped block: 49 (12.37%)
bytes used:  header:            283  (4.1%)
             mode-partition:    974  (14.2%)
 Residuals bytes  |segment 1|segment 2|segment 3|segment 4|  total
  intra4-coeffs:  |     867 |    1265 |    1987 |       0 |    4119  (60.1%)
 intra16-coeffs:  |      14 |      46 |     291 |      14 |     365  (5.3%)
  chroma coeffs:  |     528 |     437 |     103 |      17 |    1085  (15.8%)
    macroblocks:  |      10%|      24%|      56%|       9%|     396
      quantizer:  |      38 |      32 |      26 |      16 |
   filter level:  |      11 |      13 |      11 |       2 |
------------------+---------+---------+---------+---------+-----------------
 segments total:  |    1409 |    1748 |    2381 |      31 |    5569  (81.2%)

Success
Reduction: 76% (went from 28 kb to 7 kb)

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
nice cwebp -metadata none -q 70 -alpha_q '85' -lossless -m 6 -low_memory '[doc-root]/content/plugins/webp-express/test/test-pattern-tv.jpg' -o '[doc-root]/content/webp-express/webp-images/doc-root/content/plugins/webp-express/test/test-pattern-tv.jpg.webp.lossless.webp' 2>&1

*Output:* 
Saving file '[doc-root]/content/webp-express/webp-images/doc-root/content/plugins/webp-express/test/test-pattern-tv.jpg.webp.lossless.webp'
File:      [doc-root]/content/plugins/webp-express/test/test-pattern-tv.jpg
Dimension: 340 x 280
Output:    24752 bytes
Lossless-ARGB compressed size: 24752 bytes
  * Lossless features used: SUBTRACT-GREEN
  * Precision Bits: histogram=3 transform=3 cache=9

Success
Reduction: 15% (went from 28 kb to 24 kb)

Picking lossy

Converted image in 326 ms, reducing file size with 76% (went from 28 kb to 7 kb)
