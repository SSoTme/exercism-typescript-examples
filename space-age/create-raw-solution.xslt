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

class SpaceAge extends SpaceAgeBase {<xsl:for-each select="/*/*">
    on<xsl:value-of select="name()" />() { return this.toPlanet(<xsl:value-of select="text()" />); }</xsl:for-each>
}

export { SpaceAge }
</xsl:element>
                </FileSetFile>
            </FileSetFiles>
        </FileSet>
    </xsl:template>
</xsl:stylesheet>
