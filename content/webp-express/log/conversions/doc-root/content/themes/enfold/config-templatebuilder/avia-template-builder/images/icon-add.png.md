WebP Express 0.17.2. Conversion triggered with the conversion script (wod/webp-on-demand.php), 2019-11-28 15:13:22

*WebP Convert 2.3.0*  ignited.
- PHP version: 7.0.33-0ubuntu0.16.04.7
- Server software: Apache/2.4.18 (Ubuntu)

Stack converter ignited

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-add.png
- destination: [doc-root]/content/webp-express/webp-images/doc-root/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-add.png.webp
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
- source: [doc-root]/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-add.png
- destination: [doc-root]/content/webp-express/webp-images/doc-root/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-add.png.webp
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
nice cwebp -metadata none -q 85 -alpha_q '85' -m 6 -low_memory '[doc-root]/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-add.png' -o '[doc-root]/content/webp-express/webp-images/doc-root/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-add.png.webp.lossy.webp' 2>&1

*Output:* 
Saving file '[doc-root]/content/webp-express/webp-images/doc-root/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-add.png.webp.lossy.webp'
File:      [doc-root]/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-add.png
Dimension: 24 x 48 (with alpha)
Output:    420 bytes Y-U-V-All-PSNR 46.73 50.06 49.96   47.57 dB
block count:  intra4: 6
              intra16: 0  (-> 0.00%)
              skipped block: 1 (16.67%)
bytes used:  header:             62  (14.8%)
             mode-partition:     22  (5.2%)
             transparency:       58 (99.0 dB)
 Residuals bytes  |segment 1|segment 2|segment 3|segment 4|  total
  intra4-coeffs:  |      72 |      16 |      29 |      43 |     160  (38.1%)
 intra16-coeffs:  |       0 |       0 |       0 |       0 |       0  (0.0%)
  chroma coeffs:  |      32 |      16 |      14 |       1 |      63  (15.0%)
    macroblocks:  |      16%|      16%|      16%|      50%|       6
      quantizer:  |      20 |      17 |      14 |      10 |
   filter level:  |       7 |       4 |       2 |       0 |
------------------+---------+---------+---------+---------+-----------------
 segments total:  |     104 |      32 |      43 |      44 |     223  (53.1%)
Lossless-alpha compressed size: 57 bytes
  * Lossless features used: PALETTE
  * Precision Bits: histogram=3 transform=3 cache=0
  * Palette size:   3

Success
Reduction: -101% (went from 209 bytes to 420 bytes)

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
nice cwebp -metadata none -q 85 -alpha_q '85' -lossless -m 6 -low_memory '[doc-root]/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-add.png' -o '[doc-root]/content/webp-express/webp-images/doc-root/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-add.png.webp.lossless.webp' 2>&1

*Output:* 
Saving file '[doc-root]/content/webp-express/webp-images/doc-root/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-add.png.webp.lossless.webp'
File:      [doc-root]/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-add.png
Dimension: 24 x 48
Output:    114 bytes
Lossless-ARGB compressed size: 114 bytes
  * Lossless features used: PALETTE
  * Precision Bits: histogram=3 transform=3 cache=0
  * Palette size:   4

Success
Reduction: 45% (went from 209 bytes to 114 bytes)

Picking lossless
cwebp succeeded :)

Converted image in 158 ms, reducing file size with 45% (went from 209 bytes to 114 bytes)
