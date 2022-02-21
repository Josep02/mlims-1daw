<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:strip-space elements="*" />
    <xsl:template match="/">
        <cities>
            <xsl:apply-templates />
        </cities>
    </xsl:template>
    <xsl:template match="museum">
        <city>
            <xsl:attribute name="name">
                <xsl:value-of select="city" />
            </xsl:attribute>
            <xsl:attribute name="country">
                <xsl:value-of select="country" />
            </xsl:attribute>
            <museum>
                <xsl:value-of select="name" />
            </museum>
        </city>
    </xsl:template>
</xsl:stylesheet>