WebP Express 0.17.2. Conversion triggered with the conversion script (wod/webp-on-demand.php), 2020-03-16 19:59:27

*WebP Convert 2.3.0*  ignited.
- PHP version: 7.0.33-0ubuntu0.16.04.12
- Server software: Apache/2.4.18 (Ubuntu)

Stack converter ignited

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]/content/uploads/2016/05/yoga_me.jpg
- destination: [doc-root]/content/webp-express/webp-images/doc-root/shared/content/uploads/2016/05/yoga_me.jpg.webp
- log-call-arguments: true
- converters: (array of 9 items)

The following options have not been explicitly set, so using the following defaults:
- converter-options: (empty array)
- shuffle: false
- preferred-converters: (empty array)
- extra-converters: (empty array)

The following options were supplied and are passed on to the converters in the stack:
- default-quality: 70
- encoding: "auto"
- max-quality: 80
- metadata: "none"
- near-lossless: 60
- quality: "auto"
------------


*Trying: cwebp* 

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]/content/uploads/2016/05/yoga_me.jpg
- destination: [doc-root]/content/webp-express/webp-images/doc-root/shared/content/uploads/2016/05/yoga_me.jpg.webp
- default-quality: 70
- encoding: "auto"
- low-memory: true
- log-call-arguments: true
- max-quality: 80
- metadata: "none"
- method: 6
- near-lossless: 60
- quality: "auto"
- use-nice: true
- command-line-options: ""
- try-common-system-paths: true
- try-supplied-binary-for-os: true

The following options have not been explicitly set, so using the following defaults:
- alpha-quality: 85
- auto-filter: false
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
Quality of source could not be established (Imagick or GraphicsMagick is required) - Using default instead (70).
*The near-lossless option is not supported on this (rather old) version of cwebp- skipping it.* 
Trying to convert by executing the following command:
nice cwebp -metadata none -q 70 -alpha_q '85' -m 6 -low_memory '[doc-root]/content/uploads/2016/05/yoga_me.jpg' -o '[doc-root]/content/webp-express/webp-images/doc-root/shared/content/uploads/2016/05/yoga_me.jpg.webp.lossy.webp' 2>&1

*Output:* 
Saving file '[doc-root]/content/webp-express/webp-images/doc-root/shared/content/uploads/2016/05/yoga_me.jpg.webp.lossy.webp'
File:      [doc-root]/content/uploads/2016/05/yoga_me.jpg
Dimension: 1732 x 1155
Output:    71680 bytes Y-U-V-All-PSNR 42.46 43.72 45.37   43.03 dB
block count:  intra4: 4597
              intra16: 3360  (-> 42.23%)
              skipped block: 495 (6.22%)
bytes used:  header:            222  (0.3%)
             mode-partition:  17560  (24.5%)
 Residuals bytes  |segment 1|segment 2|segment 3|segment 4|  total
  intra4-coeffs:  |    1231 |    7752 |   10871 |    6714 |   26568  (37.1%)
 intra16-coeffs:  |       0 |     201 |    1842 |    6588 |    8631  (12.0%)
  chroma coeffs:  |     452 |    3540 |    8009 |    6671 |   18672  (26.0%)
    macroblocks:  |       0%|       7%|      29%|      62%|    7957
      quantizer:  |      39 |      37 |      31 |      25 |
   filter level:  |      11 |      15 |      20 |      16 |
------------------+---------+---------+---------+---------+-----------------
 segments total:  |    1683 |   11493 |   20722 |   19973 |   53871  (75.2%)

Success
Reduction: 65% (went from 202 kb to 70 kb)

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
nice cwebp -metadata none -q 70 -alpha_q '85' -lossless -m 6 -low_memory '[doc-root]/content/uploads/2016/05/yoga_me.jpg' -o '[doc-root]/content/webp-express/webp-images/doc-root/shared/content/uploads/2016/05/yoga_me.jpg.webp.lossless.webp' 2>&1

*Output:* 
Saving file '[doc-root]/content/webp-express/webp-images/doc-root/shared/content/uploads/2016/05/yoga_me.jpg.webp.lossless.webp'
File:      [doc-root]/content/uploads/2016/05/yoga_me.jpg
Dimension: 1732 x 1155
Output:    1354930 bytes
Lossless-ARGB compressed size: 1354930 bytes
  * Lossless features used: PREDICTION CROSS-COLOR-TRANSFORM SUBTRACT-GREEN
  * Precision Bits: histogram=5 transform=4 cache=2

Success
Reduction: -556% (went from 202 kb to 1323 kb)

Picking lossy
cwebp succeeded :)

Converted image in 14074 ms, reducing file size with 65% (went from 202 kb to 70 kb)
