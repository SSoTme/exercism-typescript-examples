<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/*">
        <FileSet>
            <FileSetFiles>
                <FileSetFile>
                    <RelativePath>space-age.ts</RelativePath>
                    <xsl:element name="FileContents" xml:space="preserve">
/*******************************************************
 *   DERIVED CODE: 
 *   This file is derived from the /planet-orbits.json using
 *   > ssotme json-to-xml -i planet-orbits.json
 *   > ssotme xml-xslt-transform -i planet-orbits.json.xml -i create-raw-solutions.xslt
 *
 *   More details here at this github repo.
 *     git@github.com:SSoTme/exercism-typescript-examples.git
 ********************************************************/
import { SpaceAgeBase } from "./space-age-base";

class SpaceAge extends SpaceAgeBase {<xsl:for-each select="/*/*"><xsl:sort select="text()" data-type="number" />
    on<xsl:value-of select="name()" />() { return this.toPlanet(<xsl:value-of select="text()" />); }</xsl:for-each>
}

export { SpaceAge }
</xsl:element>
                </FileSetFile>
                <FileSetFile>
                <RelativePath>README.md</RelativePath>
                <FileContents># Space Age

Given an age in seconds, calculate how old someone would be on:

   - Earth: orbital period 365.25 Earth days, or 31557600 seconds
<xsl:for-each select="/*/*"><xsl:sort select="text()" data-type="number" />
   - <xsl:value-of select="name()" />: orbital period <xsl:value-of select="text()" /> Earth years.</xsl:for-each>

So if you were told someone were 1,000,000,000 seconds old, you should
be able to say that they're 31.69 Earth-years old.

If you're wondering why Pluto didn't make the cut, go watch [this
youtube video](http://www.youtube.com/watch?v=Z_2gbGXzFbs).

## Added ssot.me tools
 - git@github.com:SSoTme/exercism-typescript-examples.git
 - `ssotme json-to-xml` to convert planet-orbits.json into xml
 - `ssotme xml-xslt-transform` to write the derived space-age.ts

## Setup

Go through the setup instructions for TypeScript to install the necessary
dependencies:

[https://exercism.io/tracks/typescript/installation](https://exercism.io/tracks/typescript/installation)

## Requirements

Install assignment dependencies:

```bash
$ yarn install
```

## Making the test suite pass

Execute the tests with:

```bash
$ yarn test
```

In the test suites all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by changing `xit` to
`it`.

## Source

Partially inspired by Chapter 1 in Chris Pine's online Learn to Program tutorial. [http://pine.fm/LearnToProgram/?Chapter=01](http://pine.fm/LearnToProgram/?Chapter=01)

## Submitting Incomplete Solutions

It's possible to submit an incomplete solution so you can see how others have completed the exercise.</FileContents>
                </FileSetFile>
            </FileSetFiles>
        </FileSet>
    </xsl:template>
</xsl:stylesheet>
