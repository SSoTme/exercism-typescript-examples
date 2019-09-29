﻿<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/*">
        <FileSet>
            <FileSetFiles>
                <FileSetFile>
                    <RelativePath>../raw-derived.ts</RelativePath>
                    <xsl:element name="FileContents" xml:space="preserve">import { SpaceAgeBase } from "./raw-base";

class SpaceAgeDerived extends SpaceAgeBase {
    constructor(spaceAgeInSeconds:number) {
        super(spaceAgeInSeconds)
    }
    <xsl:for-each select="/*/*">
    on<xsl:value-of select="name()" />() { return this.toPlanet(<xsl:value-of select="." />); }</xsl:for-each>
}

export { SpaceAgeDerived }
</xsl:element>
                </FileSetFile>
            </FileSetFiles>
        </FileSet>
    </xsl:template>
</xsl:stylesheet>
