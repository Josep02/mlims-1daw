<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <museums>
            <xsl:apply-templates />
        </museums>
    </xsl:template>
    <xsl:template match="museum">
        <museum>
            <xsl:attribute name="name">
                <xsl:value-of select="name" />
            </xsl:attribute>
            <xsl:attribute name="city">
                <xsl:value-of select="city" />
            </xsl:attribute>
            <xsl:attribute name="country">
                <xsl:value-of select="country" />
            </xsl:attribute>
        </museum>
    </xsl:template>
</xsl:stylesheet>