WebP Express 0.17.2. Conversion triggered with the conversion script (wod/webp-on-demand.php), 2019-11-28 15:13:22

*WebP Convert 2.3.0*  ignited.
- PHP version: 7.0.33-0ubuntu0.16.04.7
- Server software: Apache/2.4.18 (Ubuntu)

Stack converter ignited

Options:
------------
The following options have been set explicitly. Note: it is the resulting options after merging down the "jpeg" and "png" options and any converter-prefixed options.
- source: [doc-root]/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-shrink.png
- destination: [doc-root]/content/webp-express/webp-images/doc-root/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-shrink.png.webp
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
- source: [doc-root]/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-shrink.png
- destination: [doc-root]/content/webp-express/webp-images/doc-root/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-shrink.png.webp
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
nice cwebp -metadata none -q 85 -alpha_q '85' -m 6 -low_memory '[doc-root]/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-shrink.png' -o '[doc-root]/content/webp-express/webp-images/doc-root/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-shrink.png.webp.lossy.webp' 2>&1

*Output:* 
Saving file '[doc-root]/content/webp-express/webp-images/doc-root/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-shrink.png.webp.lossy.webp'
File:      [doc-root]/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-shrink.png
Dimension: 24 x 48 (with alpha)
Output:    628 bytes Y-U-V-All-PSNR 44.89 43.78 44.53   44.63 dB
block count:  intra4: 6
              intra16: 0  (-> 0.00%)
              skipped block: 0 (0.00%)
bytes used:  header:             55  (8.8%)
             mode-partition:     24  (3.8%)
             transparency:      205 (99.0 dB)
 Residuals bytes  |segment 1|segment 2|segment 3|segment 4|  total
  intra4-coeffs:  |      62 |       0 |      47 |      81 |     190  (30.3%)
 intra16-coeffs:  |       0 |       0 |       0 |       0 |       0  (0.0%)
  chroma coeffs:  |      41 |       0 |      37 |      20 |      98  (15.6%)
    macroblocks:  |      16%|       0%|      33%|      50%|       6
      quantizer:  |      20 |      18 |      14 |      10 |
   filter level:  |       7 |       4 |       2 |       0 |
------------------+---------+---------+---------+---------+-----------------
 segments total:  |     103 |       0 |      84 |     101 |     288  (45.9%)
Lossless-alpha compressed size: 204 bytes
  * Lossless features used: PALETTE
  * Precision Bits: histogram=3 transform=3 cache=0
  * Palette size:   71

Success
Reduction: -13% (went from 555 bytes to 628 bytes)

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
nice cwebp -metadata none -q 85 -alpha_q '85' -lossless -m 6 -low_memory '[doc-root]/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-shrink.png' -o '[doc-root]/content/webp-express/webp-images/doc-root/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-shrink.png.webp.lossless.webp' 2>&1

*Output:* 
Saving file '[doc-root]/content/webp-express/webp-images/doc-root/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-shrink.png.webp.lossless.webp'
File:      [doc-root]/content/themes/enfold/config-templatebuilder/avia-template-builder/images/icon-shrink.png
Dimension: 24 x 48
Output:    314 bytes
Lossless-ARGB compressed size: 314 bytes
  * Lossless features used: PALETTE
  * Precision Bits: histogram=3 transform=3 cache=0
  * Palette size:   76

Success
Reduction: 43% (went from 555 bytes to 314 bytes)

Picking lossless
cwebp succeeded :)

Converted image in 163 ms, reducing file size with 43% (went from 555 bytes to 314 bytes)
